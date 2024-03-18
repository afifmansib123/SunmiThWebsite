import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Categorys = () => {
  const t = useTranslations("Category");
  const data = [
    {
      id: 1,
      icon: "/images/categories/cafe.svg",
      title: "Cafe’",
      slug: "/",
    },
    {
      id: 2,
      icon: "/images/categories/bar.svg",
      title: "Bar",
      slug: "/",
    },
    {
      id: 3,
      icon: "/images/categories/salon.svg",
      title: "Barber/Salon",
      slug: "/",
    },
    {
      id: 4,
      icon: "/images/categories/retail.svg",
      title: "Retail",
      slug: "/",
    },
    {
      id: 5,
      icon: "/images/categories/shop-fashion.svg",
      title: "Cloth Shop",
      slug: "/",
    },
    {
      id: 6,
      icon: "/images/categories/food.svg",
      title: "Cloud Kitchen",
      slug: "/",
    },
  ];

  return (
    <section className=" py-10 xl:py-12">
      <div className="">
        <h2 className=" relative after:absolute after:w-[56px] after:h-[2px] after:bg-[#9A9A9A] after:left-1/2 text-center text-3xl font-sans font-bold lg:text-[2.5rem] after:-translate-x-1/2 after:top-[162%]">
          {t("title")}
        </h2>
      </div>
      <div className="bg-skin-neutral-200 mt-16 sm:mt-24">
        <div className=" container  py-10 grid grid-cols-2 lg:grid-cols-6 gap-6">
          {data.map((data, index) => (
            <Link
              href={"/"}
              className=" flex flex-col items-center gap-4"
              key={data.id + index}
            >
              <div>
                <Image
                  src={data.icon}
                  alt={data.title}
                  width={85}
                  className=" w-auto h-[110px]"
                  quality={80}
                  height={136}
                />
              </div>
              <div>
                <h2 className=" text-lg lg:text-2xl font-sans font-bold  text-skin-neutral-700 ">
                  {data.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categorys;
