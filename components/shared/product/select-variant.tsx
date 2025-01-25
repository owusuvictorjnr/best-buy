import { Button } from "@/components/ui/button";
import { IProduct } from "@/lib/db/models/product.model";
import Link from "next/link";
import React from "react";

export default function SelectVariant({
  product,
  size,
  color,
}: {
  product: IProduct;
  color: string;
  size: string;
}) {
  const selectedColor = color || product.colors[0];
  const selectedSize = size || product.sizes[0];
  return (
    <>
      {product.colors.length > 0 && (
        <div className="space-x-2 space-y-2">
          <div className="">Color:</div>
          {product.colors.map((x: string) => (
            <Button
              asChild
              variant="outline"
              className={
                selectedColor === x ? "border-2 border-primary" : "border-2"
              }
              key={x}
            >
              <Link
                href={`?${new URLSearchParams({
                  color: x,
                  size: selectedSize,
                })}`}
                replace
                scroll={false}
                key={x}
              >
                <div
                  className="h-4 w-4 rounded-full border border-muted-foreground"
                  style={{ backgroundColor: x }}
                />

                {x}
              </Link>
            </Button>
          ))}
        </div>
      )}

      {product.sizes.length > 0 && (
        <div className="mt-2 space-x-2 space-y-2">
          <div className="">Size:</div>
          {product.sizes.map((x: string) => (
            <Button
              asChild
              variant="outline"
              className={
                selectedSize === x ? "border-2 border-primary" : "border-2"
              }
              key={x}
            >
              <Link
                href={`?${new URLSearchParams({
                  size: x,
                  color: selectedColor,
                })}`}
                replace
                scroll={false}
                key={x}
              >
                <div
                  className="h-4 w-4 rounded-full border border-muted-foreground"
                  style={{ backgroundColor: x }}
                />

                {x}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </>
  );
}
