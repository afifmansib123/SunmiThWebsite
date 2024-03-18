import { CartProvider } from "@/context/cart";
import { ReactNode } from "react";

export function GlobalProvider({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
