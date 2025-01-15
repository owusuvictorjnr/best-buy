"use client";

import useCartStore from "@/hooks/use-cart-store";
import useIsMounted from "@/hooks/use-is-mounted";
import { cn } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CartButton() {
  const isMounted = useIsMounted();
  const {
    cart: { items },
  } = useCartStore();
  const cartItemsCount = items.reduce((a, c) => a + c.quantity, 0);
  return (
    <Link href={"/cart"} className="px-1 header-button">
      <div className="flex items-end text-sm relative">
        <ShoppingCartIcon className="w-6 h-6" />

        {isMounted && (
          <span
            className={cn(
              "bg-black px-1 rounded-full text-primary text-base font-bold absolute right-[30px] top-[4px] z-10",
              cartItemsCount >= 10 && "text-sm px-0 p-[1px]"
            )}
          >
            {cartItemsCount}
          </span>
        )}
        <span className="font-bold">Cart</span>
      </div>
    </Link>
  );
}
