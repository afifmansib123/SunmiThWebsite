"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface ICartItem {
  name: string;
  price: number;
  image: string;
  stock?: number;
  quantity?: number;
  slug: string;
}

export interface CartContextProps {
  cart: ICartItem[];
  addItemToCart: (item: {
    name: string;
    price: number;
    image: string;
    stock?: number;
    quantity?: number;
    slug: string;
  }) => void;
  deleteItemFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart") || "{}").cartItems
        : []
    );
  };

  const addItemToCart = ({
    name,
    price,
    image,
    stock,
    slug,
    quantity = 1,
  }: {
    name: string;
    price: number;
    image: string;
    stock?: number;
    slug: string;
    quantity?: number;
  }) => {
    const item: ICartItem = {
      name,
      price,
      image,
      stock,
      quantity,
      slug,
    };
    
    if (!cart) {
      setCart([]);
    }
    const isItemExist = cart.find((i) => i.slug === item.slug);

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart.map((i) => (i.slug === isItemExist.slug ? item : i));
      toast.error("Product already added");
    } else {
      newCartItems = [...cart, item];
      toast.success("Product added");
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  // const deleteItemFromCart = (id: string) => {
  //   const newICartItems = cart.filter((i) => i.slug !== id);

  //   localStorage.setItem("cart", JSON.stringify({ IcartItems: newICartItems }));
  //   setCartToState();
  // };

  const deleteItemFromCart = (id: string) => {
    const newCartItems = cart.filter((i) => i.slug !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
