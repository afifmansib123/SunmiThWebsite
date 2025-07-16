"use client";

import Image from "next/image";
import MainBanner from "@/public/images/section/Hero/Banner.png";
import MobileBanner from "@/public/images/section/Hero/BannerMobile.png";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Banner() {
  const isMobile = useIsMobile();

  return (
    <main>
      {isMobile ? (
        <section className="w-full min-h-full relative">
          <div className="w-full h-full">
            <Image
              src={MobileBanner}
              alt="MobileBanner"
              className="w-full h-full object-cover bg-cover"
            />
            {/* Text */}
            <div className="absolute top-[60px] left-[30px] sm:top-[90px] sm:left-[60px] text-back z-10">
              <p className="text-[11px] sm:text-sm font-semibold">
                ก้าวสู่ยุคใหม่ของเทคโนโลยีดีไซน์บางเฉียบ
              </p>
              <p className="text-[11px] sm:text-sm font-semibold">
                ผสานความล้ำหน้าเข้ากับสไตล์ที่เป็นเอกลักษณ์
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="w-full min-h-full relative">
          <div className="w-full h-full">
            <Image
              src={MainBanner}
              alt="MainBanner"
              className="w-full h-full object-cover bg-cover"
            />
            {/* Text */}
            <div className="absolute top-[70px] left-[60px] lg:top-[90px] lg:left-[70px] xl:top-[90px] xl:left-[80px] 2xl:top-[100px] 2xl:left-[90px] text-back z-10">
              <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold">
                ก้าวสู่ยุคใหม่ของเทคโนโลยีดีไซน์บางเฉียบ
              </p>
              <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold">
                ผสานความล้ำหน้าเข้ากับสไตล์ที่เป็นเอกลักษณ์
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
