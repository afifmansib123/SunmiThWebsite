import getAllBestSellingProducts from "@/services/getBestSalesProducts";
import Image from "next/image";
import ProductCard from "../common/ProductCard";

export interface Iproduct {
  _id: string;
  productTitle: string;
  price: number;
  mainImage: {
    asset: any;
    alt: string;
  };
  currentSlug: string;
  subTitle: string;
}
const Products = async () => {
  const products = await getAllBestSellingProducts();
  const data: Iproduct[] = products[0].shop;

  return (
    <div className=" py-16 container">
      <div className=" py-7 mx-auto max-w-[246px] ">
        <Image
          src={"/images/POS Product.svg"}
          alt="sunmith product"
          className=" w-auto h-auto block mx-auto"
          width={160}
          quality={80}
          height={48}
        />
      </div>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products &&
          data.map((product: any, index: number) => (
            <ProductCard
              title={product.productTitle}
              desciption={product.desciption}
              discount={34}
              price={product.price}
              features_image={product.mainImage}
              key={product._id + index}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
