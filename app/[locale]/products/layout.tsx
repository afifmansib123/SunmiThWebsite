import MainHeader from "@/components/layout/Header";
import { ReactNode } from "react";

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainHeader path={"/products"} />
      {children}
    </>
  );
};

export default ProductsLayout;
