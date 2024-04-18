"use client"; // Add the "use client" directive at the top of the file

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  image: string;
  description?: string;
  slug?: string;
  title: string;
  className?: string;
}

const StaticsProductCard2: FC<Props> = ({
  image,
  description,
  slug,
  title,
  className,
}) => {
  const handleLearnMoreClick = () => {
    switch (title) {
      case "Remote Assistance":
        window.location.href = "https://www.sunmi.com/en-US/partner/";
        break;
      case "SUNMI TH Home":
        window.location.href = "https://sunmi-th-website.vercel.app/en/contact_us";
        break;
      case "SUNMI TH Care +":
        window.location.href = "https://lin.ee/zH1PVJL";
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative overflow-hidden min-h-[226px] w-full rounded-[8px] flex flex-col">
      <div className="z-10 left-0 right-0 absolute w-full h-[226px]">
      <Image
      sizes="450"
      src={image}
      layout="fill"
      objectFit="cover"
      alt={title}
      quality={80}
      className="blur-effect" // Add a class for the blur effect
    />
      </div>
      <div className={cn(className, "relative z-20 p-6 flex-grow flex flex-col justify-between")}>
        <div>
          <h2 className="text-xl text-white font-bold lg:text-2xl font-roboto">
            {title}
          </h2>
          {description && (
            <p className="text-sm lg:text-base font-sans font-normal text-white mt-4">
              {description}
            </p>
          )}
        </div>
        <button
          onClick={handleLearnMoreClick}
          className="transition-all duration-300 hover:gap-3 text-white hover:bg-primary inline-flex py-2 rounded-full px-3 items-center gap-2 border-2 border-white text-sm font-normal font-roboto cursor-pointer"
        >
          Learn more <FaArrowRight className="w-[17px] h-[15px]" />
        </button>
      </div>
    </div>
  );
  
};

export default StaticsProductCard2;
