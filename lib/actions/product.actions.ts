"use server";

import { connectDataBase } from "../db";
import Product from "../db/models/product.model";

export async function getAllCategories() {
  await connectDataBase();
  const categories = await Product.find({ isPublished: true }).distinct(
    "category"
  );
  return categories;
}

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
