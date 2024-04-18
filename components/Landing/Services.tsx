import features from "@/data/features.json";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";
import { Button } from "../ui/button";
import VidePlay from "./VidePlay";
import Link from "next/link"; // Import Link from Next.js


const Services = () => {
  const t = useTranslations("Services");
  const local = useLocale(); // local return th and en value

  return (
    <section className="">
      <div className=" bg-[#f3f5f7] py-8">
        <div className=" container">
          <div className=" space-y-7">
            <h2 className=" text-center text-3xl font-sans font-bold lg:text-[2.5rem]  ">
              {t("mainTitle")}
            </h2>
            <p className="text-center text-base  lg:font-semibold font-sans font-medium text-skin-neutral-700">
              {t("mainDescription")}
            </p>
            <Button
              aria-label={t("buttonTxt")}
              className="h-[60px] px-10 mx-auto block rounded-full font-sans font-bold text-xl lg:text-2xl"
            >
              <Link href="/products"> {/* Use Link component with href set to "/products" */}
                <a>{t("buttonTxt")}</a> {/* Wrap the button text in an anchor tag */}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Video Player  */}

      <VidePlay />

      <div className=" space-y-4  flex flex-col items-center mt-10  lg:hidden   lg:max-w-[535px]  rounded-[16px] p-4 bg-white/60">
        <div>
          <h2 className=" text-center sm:text-left text-2xl text-primary font-sans font-bold">
            SUNMI V2
          </h2>
        </div>
        <div>
          <p className=" text-center sm:text-left font-sans font-normal text-base">
            {local === "en"
              ? "As the official importer and distributor of SUNMI brand products, we have a professional team that has received extensive training to provide guidance, usage instructions, and post-sales consultation services to troubleshoot product-related issues. Our aim is to help your business run smoothly and deliver the best service to our customers nationwide. SUNMI's innovative products meet global standards."
              : "เป็นผู้นำเข้าและจัดจำหน่ายสินค้าอย่างเป็นทางการ ของแบรนด์ SUNMI ทางเรามีทีมงานผู้เชี่ยวชาญ ที่ได้รับการฝึกอบรมมาอย่างมืออาชีพให้คำแนะนำ การใช้งานและบริการให้คำปรึกษาหลังการขายในการ แก้ไขปัญหา การใช้งานสินค้า เพื่อช่วยให้ธุรกิจของท่าน ดำเนินไปได้ อย่างราบรื่นและมอบการบริการที่ดีที่สุด ให้แก่ลูกค้าของเราจากทั่วทั้งประเทศ สินค้านวัตกรรม ของทาง SUNMI ได้รับมาตรฐานระดับโลก"}
          </p>
        </div>
        <Button
          aria-label="ซื้อเลย"
          className=" gap-2 hover:gap-x-4 transition-all duration-300 rounded-full px-5"
        >
          ซื้อเลย <IoChevronForward className=" w-4 h-4 text-white" />
        </Button>
      </div>
      <div className="  my-10 bg-skin-orange-200 py-10">
        <div className=" container grid grid-cols-2  xl:grid-cols-4 gap-7">
          {local === "en"
            ? features.en.map((item, index) => (
                <div
                  key={index}
                  className=" space-y-4 flex flex-col items-center"
                >
                  <div>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={53}
                      height={60}
                      className=" w-auto h-auto"
                      quality={80}
                    />
                  </div>
                  <p className=" text-primary text-lg sm:text-xl lg:text-2xl font-bold font-sans">
                    {item.title}
                  </p>
                  <div
                    className=" text-center"
                    dangerouslySetInnerHTML={{ __html: item.des }}
                  />
                </div>
              ))
            : features.th.map((item, index) => (
                <div
                  key={index}
                  className=" space-y-4 flex flex-col items-center"
                >
                  <div>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={53}
                      height={60}
                      className=" w-auto h-auto"
                      quality={80}
                    />
                  </div>
                  <h4 className=" text-primary text-lg sm:text-xl lg:text-2xl font-bold font-sans">
                    {item.title}
                  </h4>
                  <div
                    className=" text-center"
                    dangerouslySetInnerHTML={{ __html: item.des }}
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
