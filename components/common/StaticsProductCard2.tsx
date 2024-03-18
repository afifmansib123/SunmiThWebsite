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
  return (
    <div className=" relative overflow-hidden min-h-[226px] w-full rounded-[8px]">
      <div className=" z-10 left-0 right-0 absolute w-full h-[226px]">
        <Image
          sizes="450"
          src={image}
          fill
          className=" w-full h-full"
          alt={title}
          quality={80}
        />
      </div>
      <div className={cn(className, "relative z-20 p-6")}>
        <h2 className="  text-xl text-white font-bold lg:text-2xl font-roboto">
          {title}
        </h2>
        {description && (
          <p className=" text-sm lg:text-base font-sans font-normal text-white">
            {description}
          </p>
        )}
        <Link href={slug || "/"}>
          <span className=" transition-all duration-300 hover:gap-3 text-white hover:bg-primary inline-flex py-2 rounded-full px-3 items-center gap-2 border-2 border-white text-sm font-normal  font-roboto">
            Learn more <FaArrowRight className=" w-[17px] h-[15px]" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default StaticsProductCard2;
