"use server";

import { PAGE_SIZE } from "../constants";
import { connectDataBase } from "../db";
import Product, { IProduct } from "../db/models/product.model";

// This function retrieves a list of unique categories
// from the database where the product is published.
export async function getAllCategories() {
  await connectDataBase();
  const categories = await Product.find({ isPublished: true }).distinct(
    "category"
  );
  return categories;
}

// retrieves a list of products from a database, filtered by
// a specific tag and sorted by creation date.
export async function getAllProductsForCard({
  tag,
  limit = 4,
}: {
  tag: string;
  limit?: number;
}) {
  await connectDataBase();
  const products = await Product.find(
    {
      tags: { $in: [tag] },
      isPublished: true,
    },
    {
      name: 1,
      href: { $concat: ["/product/", "$slug"] },
      image: { $arrayElemAt: ["$images", 0] },
    }
  )
    .sort({ createdAt: "desc" })
    .limit(limit);

  return JSON.parse(JSON.stringify(products)) as {
    name: string;
    href: string;
    image: string;
  }[];
}

// This function retrieves a list of products from the
// database that match a given tag and are published.
// It returns up to a specified limit (default 10) of products,
// sorted by creation date in descending order.
export async function getProductsByTag({
  tag,
  limit = 10,
}: {
  tag: string;
  limit?: number;
}) {
  await connectDataBase();
  const products = await Product.find({
    tags: { $in: [tag] },
    isPublished: true,
  })
    .sort({ createdAt: "desc" })
    .limit(limit);
  return JSON.parse(JSON.stringify(products)) as IProduct[];
}

export async function getProductBySlug(slug: string) {
  await connectDataBase();
  const product = await Product.findOne({ slug, isPublished: true });
  if (!product) throw new Error("Product not found");
  return JSON.parse(JSON.stringify(product)) as IProduct;
}

export async function getRelatedProductsByCategory({
  category,
  productId,
  limit = PAGE_SIZE,
  page = 1,
}: {
  category: string;
  productId: string;
  limit?: number;
  page: number;
}) {
  await connectDataBase();
  const skipAmount = (Number(page) - 1) * limit;
  const conditions = {
    isPublished: true,
    category,
    _id: {
      $ne: productId,
    },
  };

  const products = await Product.find(conditions)
    .sort({ numSales: "desc" })
    .skip(skipAmount)
    .limit(limit);
  const productsCount = await Product.countDocuments(conditions);

  return {
    data: JSON.parse(JSON.stringify(products)) as IProduct[],
    totalPages: Math.ceil(productsCount / limit),
  };
}
