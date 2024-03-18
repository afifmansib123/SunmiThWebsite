"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface InquiryItem {
  imageSrc: string;
  altText: string;
  buttonText: string;
  link: string;
}
const inquiryItems: InquiryItem[] = [
  {
    imageSrc: "/images/pre-sales.8dc1442c.png",
    altText: "pre-sales.8dc1442c contact with sunmi",
    buttonText: "Contact Sales",
    link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=contact@sunmith.com",
  },
  {
    imageSrc: "/images/after-sales.ed888741.png",
    altText: "pre-sales.8dc1442c contact with sunmi",
    buttonText: "After Sales",
    link: "https://lin.ee/7ifvWTC",
  },
  {
    imageSrc: "/images/apply-agent.d3c9bb4a.png",
    altText: "pre-sales.8dc1442c contact with sunmi",
    buttonText: "Work with us",
    link: "https://lin.ee/bbhyfsw",
  },
];

const InquirySection: React.FC = () => (
  <div style={{ background: "rgb(245, 247, 250)" }} className="py-6 lg:py-12">
    <h2 className="text-center text-2xl font-nato_sans font-bold lg:text-5xl">
      Inquiry
    </h2>
    <div className="mt-8 lg:mt-12 container grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {inquiryItems.map((item, index) => (
        <Link key={item.link} target="_blank" href={item.link}>
          <div className="cursor-pointer sm:py-12 hover:bg-white rounded-[10px]  flex items-center sm:justify-center justify-between">
            <div className="gap-2 flex flex-row sm:flex-col items-center sm:justify-center">
              <Image
                src={item.imageSrc}
                alt={item.altText}
                width={90}
                height={90}
                className="w-12 h-12 sm:w-[90px] sm:h-[90px]"
              />
              <div>
                <button className="focus:outline-none outline-none inline-flex items-center gap-2">
                  <span className="text-base lg:text-xl text-black font-roboto font-medium">
                    {item.buttonText}
                  </span>
                  <FaChevronRight className="hidden sm:block" />
                </button>
              </div>
            </div>
            <div className="sm:hidden">
              <Link href={item.link}>
                <Button variant="outline">Contact</Button>
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default dynamic(() => Promise.resolve(InquirySection), {
  ssr: false,
});
