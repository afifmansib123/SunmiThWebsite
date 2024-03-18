import MainHeader from "@/components/layout/Header";
import { ReactNode } from "react";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainHeader path={"/blogs"} />
      {children}
    </>
  );
};

export default BlogLayout;
