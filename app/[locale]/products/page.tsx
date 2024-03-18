import ProductsHero from "@/components/pages/products/ProductHero";
import { urlForImage } from "@/sanity/lib/image";
import getAllProducts from "@/services/getAllProducts";
import Image from "next/image";
import Link from "next/link";
// types
interface IProdcuts {
  productHeroImage: {
    title: string;
    description: string;
    Mobile: any;
    Dekstop: any;
  };
  series: series[];
  _id: string;
}

interface series {
  _id: string;
  seriesTitle: string;
  Description: string;
  products: Iproduct[];
}

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
const ProductsPage = async () => {
  const products: IProdcuts[] = await getAllProducts();
  return (
    <section className=" pb-10 space-y-5 lg:space-y-8">
      {products.map((p, index) => (
        <div key={p._id || index}>
          <ProductsHero
            title={p.productHeroImage.title}
            description={p.productHeroImage.description}
            images={{
              mobile: urlForImage(p.productHeroImage.Mobile),
              desktop: urlForImage(p.productHeroImage.Dekstop),
            }}
          />

          <div>
            {p.series.map((series, index) => (
              <div key={series._id || index} className=" relative container">
                <div className=" py-5 lg:py-10">
                  <div>
                    <span className=" text-lg sm:text-2xl font-roboto font-bold text-black">
                      {series.seriesTitle}
                    </span>
                  </div>
                  <div className=" pt-1 max-w-[600px]">
                    <span className=" text-sm font-normal opacity-[0.7]">
                      {series.Description}
                    </span>
                  </div>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-5">
                  {series.products.map((product, index) => (
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
                          {/* <h3
                            style={{
                              color: "rgb(102, 102, 102)",
                            }}
                            className="font-semibold text-sm xl:text-base mb-3"
                          >
                            ${product.price}
                          </h3> */}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsPage;
