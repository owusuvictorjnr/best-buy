import BrowsingHistoryList from "@/components/shared/browsing-history-list";
import AddToBrowsingHistory from "@/components/shared/product/add-to-browsing-history";
import ProductGallery from "@/components/shared/product/product-gallery";
import ProductPrice from "@/components/shared/product/product-price";
import ProductSlider from "@/components/shared/product/product-slider";
import Rating from "@/components/shared/product/rating";
import SelectVariant from "@/components/shared/product/select-variant";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  getProductBySlug,
  getRelatedProductsByCategory,
} from "@/lib/actions/product.actions";
import React from "react";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetails(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: string; color: string; size: string }>;
}) {
  const searchParams = await props.searchParams;

  const { page, color, size } = searchParams;

  const params = await props.params;

  const { slug } = params;

  const product = await getProductBySlug(slug);

  const relatedProducts = await getRelatedProductsByCategory({
    category: product.category,
    productId: product._id,
    page: Number(page || "1"),
  });

  return (
    <div>
      <AddToBrowsingHistory id={product._id} category={product.category} />
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <ProductGallery images={product.images} />
          </div>

          <div className="flex flex-col w-full gap-2 md:p-5 col-span-2">
            <div className="flex flex-col gap-3">
              <p className="p-medium-16 rounded-full bg-gray-500/10 text-gray-500">
                Brand {product.brand} {product.category}
              </p>
              <h1 className="font-bold text-lg lg:text-xl">{product.name}</h1>
              <div className="flex gap-2 items-center">
                <span className="">{product.avgRating.toFixed(1)}</span>
                <Rating rating={product.avgRating} />
                <span>{product.numReviews} ratings</span>
              </div>
              <Separator />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <ProductPrice
                    price={product.price}
                    listPrice={product.listPrice}
                    isDeal={product.tags.includes("todays-deal")}
                    forListing={false}
                  />
                </div>
              </div>
            </div>

            <div className="">
              <SelectVariant
                product={product}
                size={size || product.sizes[0]}
                color={color || product.colors[0]}
              />
            </div>

            <Separator className="my-2" />
            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-gray-600">Description:</p>
              <p className="p-medium-16 lg:p-regular-18">
                {product.description}
              </p>
            </div>
          </div>

          <div className="">
            <Card>
              <CardContent className="p-4 flex flex-col gap-4">
                <ProductPrice price={product.price} />

                {product.countInStock > 0 && product.countInStock <= 3 && (
                  <div className="text-destructive font-bold">
                    {`Only ${product.countInStock} left in stock - order soon`}
                  </div>
                )}
                {product.countInStock !== 0 ? (
                  <div className="text-green-700 text-xl">In stock</div>
                ) : (
                  <div className="text-destructive text-xl">Out of Stock</div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <ProductSlider
          products={relatedProducts.data}
          title={`Best sellers in ${product.category}`}
        />
      </section>

      <section>
        <BrowsingHistoryList className="mt-10" />
      </section>
    </div>
  );
}
