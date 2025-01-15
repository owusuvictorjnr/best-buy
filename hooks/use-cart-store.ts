import { calcDeliveryDateAndPrice } from "@/lib/actions/order.actions";
import { Cart, OrderItem } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  shippingPrice: undefined,
  taxPrice: undefined,
  totalPrice: 0,
  paymentMethod: undefined,
  deliveryDateIndex: undefined,
};

interface CartState {
  cart: Cart;
  addItem: (item: OrderItem, quantity: number) => Promise<string>;
}

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: initialState,

      addItem: async (item: OrderItem, quantity: number) => {
        const { items } = get().cart;
        const existItem = items.find(
          (x) =>
            x.product === item.product &&
            x.color === item.color &&
            x.size === item.size
        );
        if (existItem) {
          if (existItem.countInStock < quantity + existItem.quantity) {
            throw new Error("Not enough items in stock");
          }
        } else {
          if (item.countInStock < item.quantity) {
            throw new Error("Not enough items in stock");
          }
        }

        const updatedCateItems = existItem
          ? items.map((x) =>
              x.product === item.product &&
              x.color === item.color &&
              x.size === item.size
                ? { ...existItem, quantity: existItem.quantity + quantity }
                : x
            )
          : [...items, { ...item, quantity }];

        set({
          cart: {
            ...get().cart,
            items: updatedCateItems,
            ...(await calcDeliveryDateAndPrice({
              items: updatedCateItems,
            })),
          },
        });

        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        return updatedCateItems.find(
          (x) =>
            x.product === item.product &&
            x.color === item.color &&
            x.size === item.size
        )?.clientId!;
      },
      init: () => set({ cart: initialState }),
    }),
    {
      name: "cart-store",
    }
  )
);

export default useCartStore;
