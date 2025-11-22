"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { CartContextType } from "../model/cart-context.model";
import { CartItem } from "../model/cart-item.model";
import { Product } from "../model/product.model";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("cart context not found");
  }
  return context;
};

export default function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [cartItems, setCartItem] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItem((prev: CartItem[]) => {
      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const deleteToCart = (product: Product) => {
    setCartItem((prev: CartItem[]) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        if (existing.quantity > 1) {
          return prev.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
          );
        } else {
          return prev.filter((p) => p.id !== product.id);
        }
      }
      return prev;
    });
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setOpen,
        addToCart,
        cartItems,
        deleteToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
