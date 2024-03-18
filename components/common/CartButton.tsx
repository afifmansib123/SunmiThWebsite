"use client";

import CartContext, { CartContextProps } from "@/context/cart";
import { IProductItem } from "@/interfaces/product";
import { FC, useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Button } from "../ui/button";

const CartButton: FC<IProductItem> = ({
  name,
  feturesImage,
  title,
  slug,
  price,
}) => {
  const cartContext = useContext(CartContext) as CartContextProps | undefined;

  if (!cartContext) {
    // Handle the case when CartContext is undefined
    return null;
  }

  const handleAddToCart = async () => {
    try {
      // Make an HTTP request to your server or API to add the product to the cart
      // await axios.post('/api/add-to-cart', { name, price, slug, image: featuresImage });
      addItemToCart({ name, price, slug, image: feturesImage });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const { addItemToCart } = cartContext;
  return (
    <>
      <Button onClick={handleAddToCart} className="bg-primary">
        <FaCartPlus className=" mr-2" size={18} /> Add to Cart
      </Button>
    </>
  );
};

export default CartButton;
