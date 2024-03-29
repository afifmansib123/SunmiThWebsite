import { useTranslations } from "next-intl";
import Image from "next/image";
import StaticProductCard1 from "../common/StaticProductCard1";
import StaticsProductCard2 from "../common/StaticsProductCard2";

const OurProducts = () => {
  const t = useTranslations("OurProducts");
  return (
    <section id="our_products" className="  w-full h-full  py-10 sm:py-12">
      <div>
        <div>
          <h2 className=" relative after:absolute after:w-[56px] after:h-[2px] after:bg-[#9A9A9A] after:left-1/2 text-center text-3xl font-sans font-bold lg:text-[2.5rem] after:-translate-x-1/2 after:top-[162%]">
            {t("title")}
          </h2>
        </div>
        <p className=" max-w-[1000px] mx-auto pt-[40px] sm:pt-[60px] text-center text-base lg:text-lg lg:font-semibold font-sans font-medium text-skin-neutral-700">
          {t("description")}
        </p>
      </div>
      <div
        className=" mt-[30px]   flex  h-full  bg-p_bg_lg bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "100% 100%",
        }}
      >
        <div className=" py-7 lg:py-14 container flex flex-col gap-10 xl:flex-row w-full h-full  xl:items-center justify-between">
          <div className="  p-4 xl:p-10 bg-white/40 rounded-[20px]">
            <div className=" px- lg:px-5 grid lg:grid-cols-2 gap-6">
              <StaticProductCard1
                prductImage="/images/products/1.svg"
                title="Boost your business abilities."
                productName="V2s"
                subTitle="Smart Mobile Terminal  "
                bg="/images/g1.png"
              />
              <StaticProductCard1
                prductImage="/images/products/sunmi-d3-mini_2-removebg-preview 1.svg"
                title="High-speed operation, stable and smooth."
                productName="D3 Mini"
                subTitle="Smart Desktop Terminal "
                bg="/images/g2.png"
              />
            </div>
            <div className="  mt-6  grid grid-cols-12 gap-6">
              <div className=" col-span-12 xl:col-span-5">
                <StaticsProductCard2
                  image="/images/Remote Assistance.png"
                  title="Remote Assistance"
                  description=" Troubleshoot, with no geographic restrictions."
                  className=" flex  items-center col-span-12 xl:col-span-5 flex-col gap-5"
                />
              </div>
              <div className=" grid col-span-12 xl:col-span-7  gap-6 lg:grid-cols-2">
                <StaticsProductCard2
                  image="/images/sunmit home.png"
                  title="SUNMI TH Home"
                  className=" flex flex-col gap-5"
                />
                <StaticsProductCard2
                  image="/images/SUNMI TH Care +.png"
                  title="SUNMI TH Care +"
                  className=" flex flex-col p-0 gap-5"
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/images/ภาพถ่ายหน้าจอ_2567-02-10_เวลา_10.21 2.png"}
              alt="ภาพถ่ายหน้าจอ_2567-02-10_เวลา_10.21 2"
              width={356}
              height={371}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
