import B2B from "@/components/Landing/B2B";
import Categorys from "@/components/Landing/Category";
import Hero from "@/components/Landing/Hero";
import OurProducts from "@/components/Landing/OurProducts";
import OurServices from "@/components/Landing/OurServices";
import Products from "@/components/Landing/Products";
import Services from "@/components/Landing/Services";
import MainHeader from "@/components/layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sunmith-ek4h.vercel.app/"),
  title: {
    default: "เครื่องคิดเงิน POS l SUNMITH พร้อมโปรแกรมขายหน้าร้าน",
    template: `%s | เครื่องคิดเงิน POS l SUNMITH พร้อมโปรแกรมขายหน้าร้าน`,
  },
  description:
    "SUNMITH เครื่องคิดเงิน POS หลายรุ่นให้เลือกใช้ตามความเหมาะสมของหน้าร้าน เป็นได้ทั้ง เครื่องคิดเงิน ร้านค้า ระบบ POS ร้านอาหาร",
  alternates: {
    canonical: `https://sunmith-ek4h.vercel.app/`,
    languages: {
      en: "en-US",
      th: "th-th",
    },
  },
};

export default function Home() {
  return (
    <>
      <MainHeader path={"/"} />
      <Hero />
      <Categorys />
      <OurProducts />
      <OurServices />
      <B2B />
      <Products />
      <Services />
    </>
  );
}
