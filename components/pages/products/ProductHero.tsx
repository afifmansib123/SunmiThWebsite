"use client";

import { useMediaQuery } from "react-responsive";

const ProductsHero = ({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: {
    mobile: string;
    desktop: string;
  };
}) => {
  // Define breakpoints for mobile and desktop
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const heroStyles = {
    backgroundImage: `url(${isMobile ? images.mobile : images.desktop})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: isMobile ? "180px" : "378px",
  };

  return (
    <div className="relative">
      <div style={heroStyles} className="flex relative h-full">
        <div className="flex container text-white flex-col justify-center">
          <div className="lg:max-w-[700px] space-y-3">
            <h2 className="text-xl sm:text-2xl xl:text-4xl font-roboto">
              {title}
            </h2>
            <p className="text-xs sm:text-sm opacity-[0.6]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
