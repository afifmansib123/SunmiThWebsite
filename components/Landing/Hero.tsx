"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "swiper/css/pagination";

import Link from "next/link";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
export default function Hero() {
  const data = [
    {
      mobile: "/images/hero/new/1m.webp",
      desktop: "/images/hero/new/1d.webp",
    },
    {
      mobile: "/images/hero/new/2m.webp",
      desktop: "/images/hero/new/2d.webp",
    },
    {
      mobile: "/images/hero/new/3m.webp",
      desktop: "/images/hero/new/3d.webp",
    },
  ];

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="heroSwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={"/"}>
              <div
                className=" bg-cover   sm:hidden flex  flex-col"
                style={{
                  backgroundImage: `url(${item.mobile})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "625px",
                }}
              ></div>
              <div
                className=" bg-cover  sm:flex  hidden  flex-col"
                style={{
                  backgroundImage: `url(${item.desktop})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "700px",
                }}
              ></div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
