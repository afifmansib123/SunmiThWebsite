"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import LocaleSwitcher from "../common/LandguageSwicher";
import CartsItems from "../pages/products/Cart";
import SearchBar from "../ui/searchbar";

const MainHeader = ({ path }: { path: any }) => {
  const locale = useLocale();

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "Products ",
      href: "/products",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "About us",
      href: "/about_us",
    },
    {
      label: "Contact us",
      href: "/contact_us",
    },
  ];

  return (
    <header className=" relative w-full overflow-hidden">
      <div
        className={cn(
          !header || nav
            ? " bg-transparent py-4 shadow-none  "
            : " shadow-none backdrop-blur-sm bg-white/[0.8] dark:bg-black/[0.6]  ",
          "  top-0 border-b  w-full mx-auto z-40 fixed py-5  transition-all duration-300 h-[81px]  border-neutral-200 ",
          nav && "bg-white/[0.9]"
        )}
      >
        <div className="  xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <div className="flex px-4 gap-x-6 items-center justify-between w-full">
            <div className=" inline-flex items-center gap-x-20">
              <Link href={"/"}>
                <Image
                  src={"/images/Shanghai-Sunmi-Technology-LOGO.svg"}
                  alt="Shanghai-Sunmi-Technology-LOGO"
                  width={139}
                  height={26}
                  className=" w-auto h-auto"
                />
              </Link>
              <ul
                className={cn(
                  nav
                    ? " py-8 xl:py-0  xl:px-0"
                    : "max-h-0 xl:max-h-max w-full",
                  "  hidden xl:flex flex-col items-center w-full  xl:flex-row xl:w-max xl:gap-x-8 gap-y-5"
                )}
              >
                {Links.map((link, index) => {
                  return (
                    <li
                      className={cn(
                        "relative text-base font-medium",
                        pathName === `/${locale}${link.href}`
                          ? "text-skin-status-700"
                          : "text-skin-neutral-600 dark:text-white/95"
                      )}
                      key={link.href}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="hidden xl:inline-flex items-center gap-5">
              <div className=" inline-flex items-center gap-x-5 ">
                <SearchBar />

                <CartsItems />
              </div>
              <div className=" w-[1px] bg-[#DAF1E9] h-[40px]"></div>
              <div className=" inline-flex items-center gap-5">
                <LocaleSwitcher path={path} />
              </div>
            </div>
            <div
              className=" xl:cursor-pointer xl:hidden"
              onClick={() => setNav((prev) => !prev)}
            >
              {nav ? (
                <IoClose className=" w-6 h-6 text-primary dark:text-white/95 " />
              ) : (
                <HiOutlineMenu className=" w-6 h-6 text-primary dark:text-white/95 " />
              )}
            </div>
          </div>
          {nav && (
            <ul
              className={cn(
                nav
                  ? " py-8 xl:py-0  xl:px-0"
                  : "max-h-0 xl:max-h-max w-full bg-background",
                " flex  flex-col items-center w-full bg-background/90  xl:flex-row xl:w-max xl:gap-x-8 gap-y-5 bg-white"
              )}
            >
              {Links.map((link, index) => (
                <li
                  className={cn(
                    "relative text-base font-medium",
                    pathName === `/${locale}${link.href}`
                      ? "text-skin-status-700"
                      : "text-skin-neutral-600 dark:text-white/95"
                  )}
                  key={index}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <div className=" xl:hidden flex flex-col items-center gap-5">
                  <div className=" inline-flex items-center gap-x-5 ">
                    <SearchBar />
                    <CartsItems />
                  </div>
                  <div className=" w-[1px] bg-[#DAF1E9] h-[40px]"></div>
                  <div className=" inline-flex items-center gap-5">
                    <LocaleSwitcher path={path} />
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
