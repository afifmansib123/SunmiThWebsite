import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const StaticProductCard1 = ({
  bg,
  title,
  subTitle,
  productName,
  slug,
  prductImage,
}: {
  bg: string;
  title: string;
  subTitle: string;
  productName: string;
  slug?: string;
  prductImage: string;
}) => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
      className=" bg-cover bg-center w-full p-6 bg-no-repeat rounded-[8px]"
    >
      <div className=" flex justify-end">
        <h3 className="text-base lg:text-lg  font-sans font-normal text-white">
          {title}
        </h3>
      </div>
      <div className=" flex items-center  justify-between gap-2">
        <div className="  max-w-[141px] lg:max-w-[195px]">
          <Image
            src={prductImage}
            alt={title}
            width={184}
            className=" w-auto h-auto"
            quality={80}
            height={131}
          />
        </div>
        <div className="   space-y-4 pt-5">
          <h2 className=" text-3xl font-bold text-center font-sans text-white">
            {productName}
          </h2>
          <p className=" text-sm text-white text-right font-sans font-normal">
            {subTitle}
          </p>
          <div className="flex justify-end">
            <button
              aria-label="learn-more-product"
              className=" transition-all duration-300 hover:gap-3 text-white hover:bg-primary inline-flex py-1.5 rounded-full px-3 items-center gap-2 border-2 border-white text-sm font-normal  font-roboto"
            >
              Learn more <FaArrowRight className=" w-[17px] h-[15px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticProductCard1;
