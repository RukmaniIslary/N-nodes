"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];

  isOpen: boolean;

  openCart: () => void;
  closeCart: () => void;

  addItem: (item: Omit<CartItem, "quantity">) => void;

  removeItem: (id: string) => void;

  increase: (id: string) => void;

  decrease: (id: string) => void;

  subtotal: () => number;

  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      isOpen: false,

      openCart: () =>
        set({
          isOpen: true,
        }),

      closeCart: () =>
        set({
          isOpen: false,
        }),

      addItem: (item) => {
        const existing =
          get().items.find(
            (i) => i.id === item.id
          );

        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id
                ? {
                    ...i,
                    quantity:
                      i.quantity + 1,
                  }
                : i
            ),
          });

          return;
        }

        set({
          items: [
            ...get().items,
            {
              ...item,
              quantity: 1,
            },
          ],
        });
      },

      removeItem: (id) =>
        set({
          items: get().items.filter(
            (i) => i.id !== id
          ),
        }),

      increase: (id) =>
        set({
          items: get().items.map((i) =>
            i.id === id
              ? {
                  ...i,
                  quantity:
                    i.quantity + 1,
                }
              : i
          ),
        }),

      decrease: (id) =>
        set({
          items: get().items.map((i) =>
            i.id === id
              ? {
                  ...i,
                  quantity: Math.max(
                    1,
                    i.quantity - 1
                  ),
                }
              : i
          ),
        }),

      subtotal: () =>
        get().items.reduce(
          (sum, item) =>
            sum +
            item.price *
              item.quantity,
          0
        ),

      clearCart: () =>
        set({
          items: [],
        }),
    }),
    {
      name: "nnodes-cart",
    }
  )
);