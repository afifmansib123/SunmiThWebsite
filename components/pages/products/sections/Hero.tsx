"use client";

import Image from "next/image";
import Bg from "@/public/images/section/Hero/Bg-HeroSection.png";
import SunmiV3 from "@/public/images/section/Hero/Sunmi-V3.png";
import sunmiOS from "@/public/images/section/Hero/sunmi-os.png";
import sunmiWifi from "@/public/images/section/Hero/sunmi-wifi.png";
import sunmiDMP from "@/public/images/section/Hero/sunmi-dmp.png";
import GoogleMobileService from "@/public/images/section/Hero/google-mobile-service.png";
import V3frontAndback from "@/public/images/section/Hero/V3-frontAndback.png";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <main>
      {isMobile ? (
        <section className="w-full min-h-[694px] relative bg-white overflow-hidden">
          {/* Background */}
          <Image
            src={Bg}
            alt="Bg-HeroSection"
            className="absolute inset-0 object-cover w-full h-full z-0"
            width={1440}
            height={694}
          />
          {/* Content */}
          <div className="container relative z-10 w-full h-full flex items-center justify-center px-12 py-12">
            {/* Logo Sunmi V3 */}
            <div className="w-full text-center">
              <Image
                src={SunmiV3}
                alt="SUNMI V3"
                className="bg-no-repeat object-cover bg-cover"
                width={250}
                height={90}
              />
              <h2 className="text-lg sm:text-xl text-start font-semibold text-[#575757]">
                THRID GENERATION OF POS
              </h2>
              <p className="text-[#393939] text-sm sm:text-base text-start mx-0">
                เปิดประตูสู่ยุคใหม่ของเทคโนโลยี
                ผสานดีไซน์ล้ำสมัยสไตล์โดดเด่นเหนือใคร
                ยกระดับประสบการณ์การใช้งานให้ล้ำหน้าในทุกมิติ
              </p>
              {/* Sunmi V3 Front and Back */}
              <div className="w-full flex justify-center relative my-3 sm:my-2">
                <Image
                  src={V3frontAndback}
                  alt="V3-frontAndback"
                  width={400}
                  height={400}
                  className="max-h-[300px] sm:max-h-[350px] object-contain md:translate-x-14 xl:translate-x-6 block"
                />
              </div>
              {/* Logo Features */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 pt-4">
                <Image
                  src={sunmiOS}
                  alt="sunmi-os"
                  className="w-[70px] sm:w-[100px] min-h-full"
                />
                <Image
                  src={sunmiWifi}
                  alt="sunmi-wifi"
                  className="w-[70px] sm:w-[100px] min-h-full"
                />
                <Image
                  src={sunmiDMP}
                  alt="sunmi-dmp"
                  className="w-[70px] sm:w-[100px] min-h-full"
                />
                <Image
                  src={GoogleMobileService}
                  alt="google-mobile-service"
                  className="w-[70px] sm:w-[100px] min-h-full"
                />
              </div>
              {/* Button */}
              <button className="bg-[#F47322] text-white text-center text-sm sm:text-base font-semibold px-16 py-3 rounded-full shadow-lg mt-8 hover:bg-orange-600 transition ease-in-out duration-300">
                สั่งซื้อสินค้าได้เลยที่นี่
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="w-full min-h-[694px] relative bg-white overflow-hidden">
          {/* Background */}
          <Image
            src={Bg}
            alt="Bg-HeroSection"
            className="absolute inset-0 w-full h-full z-0 bg-no-repeat bg-cover"
            width={1440}
            height={694}
          />
          {/* Content */}
          <div className="container relative z-10 w-full h-full flex items-center justify-center px-12 py-12 mt-12 gap-20">
            {/* Left Content */}
            <div className="w-1/2 text-left">
              <Image
                src={SunmiV3}
                alt="SUNMI V3"
                className="mx-0 bg-no-repeat object-cover bg-cover"
                width={390}
                height={90}
              />
              <h2 className="text-xl font-semibold text-[#575757]">
                THRID GENERATION OF POS
              </h2>
              <p className="text-[#393939] text-base max-w-md mx-0">
                เปิดประตูสู่ยุคใหม่ของเทคโนโลยี
                ผสานดีไซน์ล้ำสมัยสไตล์โดดเด่นเหนือใคร
                ยกระดับประสบการณ์การใช้งานให้ล้ำหน้าในทุกมิติ
              </p>
              {/* Button */}
              <button className="bg-[#F47322] text-white text-center text-lg font-semibold px-16 py-3 rounded-full shadow-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300">
                สั่งซื้อสินค้าได้เลยที่นี่
              </button>
              {/* Logo Features */}
              <div className="flex flex-wrap justify-start gap-4 pt-4">
                <Image src={sunmiOS} alt="sunmi-os" className="min-h-full" />
                <Image
                  src={sunmiWifi}
                  alt="sunmi-wifi"
                  className="min-h-full"
                />
                <Image src={sunmiDMP} alt="sunmi-dmp" className="min-h-full" />
                <Image
                  src={GoogleMobileService}
                  alt="google-mobile-service"
                  className="min-h-full"
                />
              </div>
            </div>
            {/* Right Content */}
            <div className="w-1/2 flex justify-center relative">
              {/* Sunmi V3 Front and Back */}
              <Image
                src={V3frontAndback}
                alt="V3-frontAndback"
                width={400}
                height={400}
                className="max-h-[500px] object-contain block"
              />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
