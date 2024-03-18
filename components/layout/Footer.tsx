import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const trnslate = useTranslations("footer");
  return (
    <footer className="  bg-[#F7F7F7] py-10">
      <div className=" container flex flex-col lg:flex-row gap-10 items-start justify-between">
        <div className=" basis-full lg:basis-[45%]">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/Shanghai-Sunmi-Technology-LOGO.svg"}
                alt="Shanghai-Sunmi-Technology-LOGO"
                width={139}
                height={26}
              />
            </Link>
          </div>
          <div className=" pt-6">
            <h4 className=" text-base font-sans font-bold text-skin-neutral-600">
              SUNMI TH SERVICE CENTER
            </h4>
            <ul className="">
              <li>
                <p className="text-base font-sans font-normal text-skin-neutral-600">
                  10/5 Kanchanaphisek Rd, Khwaeng Prawet, Prawet, Bangkok 10250
                </p>
              </li>
              <li>
                <p className="text-base font-sans font-normal text-skin-neutral-600">
                  สำนักงาน : 02-5217155-59 ต่อ 804 หรือ 808
                </p>
              </li>
              <li>
                <p className="text-base font-sans font-normal text-skin-neutral-600">
                  มือถือ : 063-986-4820
                </p>
              </li>
              <li>
                <p className="text-base font-sans font-normal text-skin-neutral-600">
                  อีเมล : care@sunmith.com
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" basis-full lg:basis-[55%] flex  flex-col sm:flex-row gap-7 justify-between">
          <div>
            <div>
              <h2 className=" text-2xl font-sans font-semibold text-skin-neutral-600">
                {trnslate("title1")}
              </h2>
            </div>
            <ul className=" pt-4 space-y-3">
              <li>
                <Link
                  className=" hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"/products"}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"/shop"}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"/blogs"}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"/about_us"}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"/contact_us"}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h2 className=" text-2xl font-sans font-semibold text-skin-neutral-600">
                {trnslate("title2")}
              </h2>
            </div>
            <ul className=" pt-4 space-y-3">
              <li>
                <Link
                  className=" hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"/products"}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"/"}
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"/"}
                >
                  Term&Condition
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"/contact_us"}
                >
                  Location
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h2 className=" text-2xl font-sans font-semibold text-skin-neutral-600">
                {trnslate("title3")}
              </h2>
            </div>
            <ul className=" pt-4 flex flex-col space-y-3">
              <li className=" inline-flex items-center gap-2">
                <Image
                  src={"/icons/facebook.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                  className=" w-auto h-auto"
                />
                <Link
                  className=" hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"https://www.facebook.com/SUNMITHBKK"}
                  target="_blank"
                >
                  sunmithai
                </Link>
              </li>
              <li className=" inline-flex items-center gap-2">
                <Image
                  src={"/icons/line.svg"}
                  alt="line"
                  width={24}
                  height={24}
                  className=" w-auto h-auto"
                />
                <Link
                  className=" hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"https://page.line.me/888vwsck?openQrModal=true"}
                  target="_blank"
                >
                  @sunmicare
                </Link>
              </li>
              <li className=" inline-flex items-center gap-2">
                <Image
                  src={"/icons/instagram.svg"}
                  alt="instagram"
                  width={24}
                  className=" w-auto h-auto"
                  height={24}
                />
                <Link
                  className=" hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"https://www.instagram.com/sunmithofficial"}
                  target="_blank"
                >
                  sunmithofficial_
                </Link>
              </li>
              <li className=" inline-flex items-center gap-2">
                <FaLinkedin size={24} />
                <Link
                  className=" hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={"https://www.linkedin.com/company/sunmith/"}
                  target="_blank"
                >
                  sunmith
                </Link>
              </li>
              <li className=" inline-flex items-center gap-2">
                <FaYoutube size={24} />
                <Link
                  className=" hover:underline transition-colors duration-500 hover:text-primary text-base xl:text-lg font-medium font-sans text-skin-neutral-600"
                  href={
                    "https://www.youtube.com/channel/UCR7BK3Kd1nxyM9P9gqr2YmQ"
                  }
                  target="_blank"
                >
                  sunmith
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" h-[1px] my-8 w-full container bg-[#E6E6E6]"></div>
      <div>
        <p className=" text-base font-sans font-normal text-[#464646] text-center">
          ©2024 SUNMI TH Co., Ltd. All rights reserved. | Shanghai SUNMI
          Technology Co., Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
