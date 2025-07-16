"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { json } from "@/data/sale-page/serviceV3.data";
import { getLocalizedData } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image"

export default function Services() {

  const locale = useLocale();
  const serviceV3 = getLocalizedData(locale, json);

  return (
    <section className="container w-full pb-6">
      <main className="w-full h-full">
        {/* text */}
        <div className="pt-14">
          <p className="text-[22px] pl-2 font-medium">ทำไมซื้อ SUNMI V3 ที่เราถึงดีที่สุด?</p>
        </div>

        {/* list */}
        <div className="w-full h-full pb-16 pt-2">
          <Carousel className="w-full">
            <CarouselContent>
              {serviceV3.icon.map((icon, index) => (
                <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-[300px]"> 
                    <Card className="min-h-[210px] shadow-lg">
                      <CardContent className="flex flex-col aspect-square h-[250px] sm:h-[290px] md:h-[250px] items-center justify-center p-4 gap-2  w-full sm:items-center sm:gap-4 sm:p-12">
                         <Image src={icon.src} alt={icon.alt}
                         width={65}
                         height={65}
                         className="md:pt-3"
                         />
                        <span className="md:text-base text-2xl font-semibold text-center pt-4 px-5 sm:px-20 md:px-4 md:pt-0">
                          {serviceV3.title[index]}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
        </div>
      </main>
    </section>
  );
}
