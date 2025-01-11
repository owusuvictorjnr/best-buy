import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/signin" className="header-button">
          <UserIcon className="w-6 h-6" />

          <span className="font-bold">Sign In</span>
        </Link>

        <Link href="/cart" className="header-button">
          <ShoppingCartIcon className="w-6 h-6" />

          <span className="font-bold">Cart</span>
        </Link>
      </nav>
    </div>
  );
}
