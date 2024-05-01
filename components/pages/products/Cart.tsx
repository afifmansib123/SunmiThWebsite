"use client";

import { useContext } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartContext, { CartContextProps } from "@/context/cart";
import Image from "next/image";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";

export default function CartsItems() {
  const cartContext = useContext(CartContext) as CartContextProps | undefined;

  if (!cartContext) {
    // Handle the case when CartContext is undefined
    return null;
  }

  const { cart, deleteItemFromCart } = cartContext;

  const subtotal = cart.reduce((total, item) => {
    return total + (item.price);
  }, 0);
  
  const getCartLengthGroup = (length: number): string => {
    if (length < 10) {
      // Pad the number with leading zero if it's less than 10
      return `0${length}`;
    } else {
      // Use the original length for double-digit numbers
      return `${length}`;
    }
  };

  const cartLengthGroup = getCartLengthGroup(cart?.length || 0);
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button className=" relative ">
            <MdShoppingCart className=" w-7 h-7 text-primary" />
            <span className=" w-4 h-4 rounded-full bg-white absolute right-0 flex items-center text-[10px] font-roboto font-medium  text-skin-status-600 justify-center -top-1">
              {cartLengthGroup}
            </span>
          </button>
        </SheetTrigger>
        <SheetContent className=" sm:max-w-[25rem]">
          <SheetHeader>
            <SheetTitle>Cart items</SheetTitle>
          </SheetHeader>
          <div className=" pr-6 h-full overflow-y-auto">
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cart?.map((product, index) => (
                    <li key={product.slug + index} className="flex py-6">
                      <div className="h-24 w-24 flex justify-center items-center flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={96}
                          height={96}
                          className="w-[56px] block mx-auto  h-auto  object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link href={product.slug || "/products"}>
                                {product.name}
                              </Link>
                            </h3>
                            <p className="ml-4">{product.price}฿</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Qty {product.quantity}
                          </p>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => deleteItemFromCart(product.slug)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t mt-10 border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>{subtotal}฿</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <a
                    href={`checkout`}
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
