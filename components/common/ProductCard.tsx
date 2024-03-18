import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { FC } from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";

interface IProducts {
  features_image: any;
  title: string;
  desciption?: string;
  reviews?: {
    total: number;
  };
  price: number;
  discount?: number;
}
const ProductCard: FC<IProducts> = ({
  desciption,
  features_image,
  title,
  reviews,
  price,
  discount,
}) => {
  return (
    <div
      style={{
        boxShadow: " 10px 40px 50px 0px rgba(229, 233, 246, 0.4)",
      }}
      className="border-[1px]  rounded-[16px] p-6 border-primary"
    >
      <div>
        <Image
          src={urlForImage(features_image)}
          alt={title}
          width={133}
          height={133}
          quality={80}
          className=" w-[133px]  block mx-auto h-[133px]"
        />
      </div>
      <div className=" pt-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className=" text-base font-bold font-nato_sans text-skin-neutral-600">
            {title}
          </h2>
        </div>
        <div>
          <p className=" text-skin-neutral-300 font-nato_sans font-normal text-xs">
            {desciption}
          </p>
        </div>
        <div className=" flex items-center justify-between">
          <div className="  inline-flex items-center gap-1">
            <FaStar className=" w-3 h-3 text-primary" />
            <FaStar className=" w-3 h-3 text-primary" />
            <FaStar className=" w-3 h-3 text-primary" />
            <FaStar className=" w-3 h-3 text-primary" />
            <FaStar className=" w-3 h-3 text-primary" />
            <FaStar className=" w-3 h-3 text-primary" />
          </div>
          <div>
            <p className=" text-[10px] text-skin-neutral-300 font-nato_sans font-normal">
              ขายแล้ว 100 ชิ้น
            </p>
          </div>
        </div>
        <div className="  inline-flex items-center ">
          <svg
            width="15"
            height="24"
            viewBox="0 0 15 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 22.1211V1.93457H6.71243C8.86154 1.93457 10.542 2.38977 11.7562 3.30016C12.9704 4.21055 13.5787 5.57614 13.5787 7.39693C13.5787 8.29339 13.2876 9.09462 12.703 9.80297C12.1183 10.509 11.3515 11.0339 10.4 11.3776C11.6426 11.6354 12.6201 12.2322 13.3325 13.1658C14.0426 14.0995 14.4 15.1864 14.4 16.4242C14.4 18.2729 13.7893 19.6849 12.5704 20.6603C11.3515 21.6358 9.69467 22.1235 7.60473 22.1235H0V22.1211ZM3.06272 10.0143H7.2568C8.22012 10.0143 9.00592 9.77742 9.61183 9.30597C10.2178 8.83451 10.5183 8.17726 10.5183 7.33422C10.5183 6.41454 10.1917 5.72478 9.53846 5.26958C8.88521 4.81438 7.94556 4.58446 6.71716 4.58446H3.06272V10.0143ZM3.28521 13.0822V19.5572H7.55503C8.67456 19.5572 9.54556 19.2855 10.1728 18.7443C10.8 18.2009 11.1124 17.4322 11.1124 16.4358C11.1124 15.3907 10.8521 14.5709 10.329 13.9764C9.80592 13.3795 9.00355 13.0822 7.91716 13.0822H3.28521Z"
              fill="#F5222D"
            />
            <path d="M7.77053 0H5.00366V24H7.77053V0Z" fill="#F5222D" />
          </svg>

          <h2 className=" text-2xl font-bold font-nato_sans text-skin-status-700">
            {price}
          </h2>
        </div>
        <div className=" flex items-center gap-3">
          <div className="  inline-flex items-center ">
            <svg
              width="7.2"
              height="12"
              viewBox="0 0 15 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 22.1211V1.93457H6.71243C8.86154 1.93457 10.542 2.38977 11.7562 3.30016C12.9704 4.21055 13.5787 5.57614 13.5787 7.39693C13.5787 8.29339 13.2876 9.09462 12.703 9.80297C12.1183 10.509 11.3515 11.0339 10.4 11.3776C11.6426 11.6354 12.6201 12.2322 13.3325 13.1658C14.0426 14.0995 14.4 15.1864 14.4 16.4242C14.4 18.2729 13.7893 19.6849 12.5704 20.6603C11.3515 21.6358 9.69467 22.1235 7.60473 22.1235H0V22.1211ZM3.06272 10.0143H7.2568C8.22012 10.0143 9.00592 9.77742 9.61183 9.30597C10.2178 8.83451 10.5183 8.17726 10.5183 7.33422C10.5183 6.41454 10.1917 5.72478 9.53846 5.26958C8.88521 4.81438 7.94556 4.58446 6.71716 4.58446H3.06272V10.0143ZM3.28521 13.0822V19.5572H7.55503C8.67456 19.5572 9.54556 19.2855 10.1728 18.7443C10.8 18.2009 11.1124 17.4322 11.1124 16.4358C11.1124 15.3907 10.8521 14.5709 10.329 13.9764C9.80592 13.3795 9.00355 13.0822 7.91716 13.0822H3.28521Z"
                fill="#636363"
              />
              <path d="M7.77053 0H5.00366V24H7.77053V0Z" fill="#636363" />
            </svg>
            <h3 className=" text-xs font-bold font-nato_sans  text-skin-neutral-700">
              18900
            </h3>
          </div>
          <Button
            aria-label="dicount_button"
            className=" h-8 rounded-full"
            variant={"destructive"}
          >
            ส่วนลด -30%
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
