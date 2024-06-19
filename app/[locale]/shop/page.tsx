import CartButton from "@/components/common/CartButton";
import MainHeader from "@/components/layout/Header";
import { urlForImage } from "@/sanity/lib/image";
import getAllShop from "@/services/getAllShop";
import Image from "next/image";
import Link from "next/link";
//update the shop pages
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

export const revalidate = 30; // revalidate at most 30 seconds

const Shop = async () => {
  const shopData = await getAllShop();

  const data: Iproduct[] = shopData[0].shop;
  return (
    <>
      <MainHeader path={"/shop"} />
      <div className=" container">
        <div className=" py-14 xl:py-20">
          <h2 className=" text-lg xl:text-5xl text-center font-roboto text-primary">
            Shop
          </h2>
        </div>
        <div className=" grid grid-cols-1 mb-5 sm:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-5">
          {data.map((product, index) => (
            <div key={product._id || index}>
              <div
                style={{
                  background: "rgb(240, 240, 240)",
                }}
                className="p-5  py-10  text-center transform duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <Link
                  className=" block w-full"
                  href={`/products/${product.currentSlug}`}
                >
                  <div className="  flex justify-center w-full">
                    <div className=" w-[10rem] h-[10rem]  flex justify-center">
                      <Image
                        width={260}
                        height={200}
                        src={urlForImage(product.mainImage.asset)}
                        alt={product.mainImage.alt}
                        className="rounded-md max-w-[210px] w-full  block mx-auto object-cover"
                      />
                    </div>
                  </div>
                </Link>
                <Link href={`/products/${product.currentSlug}`}>
                  <h2 className=" text-base  font-bold lg:text-xl my-5">
                    {product.productTitle}
                  </h2>
                  <p className="mb-2">{product.subTitle}</p>
                  <h3
                    style={{
                      color: "rgb(102, 102, 102)",
                    }}
                    className="font-semibold text-sm xl:text-base mb-3"
                  >
                    ฿{product.price}
                  </h3>
                </Link>
                {product.currentSlug === "v3-mix" ? (
                  <p className="text-red-500 font-bold mt-7">Out of Stock</p>
                ) : (
                  <CartButton
                    name={product.productTitle}
                    price={product.price}
                    feturesImage={urlForImage(product.mainImage.asset)}
                    slug={product.currentSlug}
                    title=""
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
