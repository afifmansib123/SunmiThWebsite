import MainHeader from "@/components/layout/Header";
import InquirySection from "./Inauiry";
import Offices from "./Offices";

interface InquiryItem {
  imageSrc: string;
  altText: string;
  buttonText: string;
  link: string;
}

const ContactUs = () => {
  return (
    <>
      <MainHeader path={"/contact_us"} />
      <section>
        <div className=" ">
          <div
            style={{
              background:
                "linear-gradient(135deg, rgb(255, 127, 0) 0%, rgb(255, 96, 0) 100%)",
            }}
            className=" h-[200px] relative overflow-hidden lg:h-[300px] flex flex-col items-center justify-center"
          >
            <div className=" space-y-2 text-center text-white">
              <h2 className=" text-2xl font-nato_sans font-bold lg:text-5xl">
                Contact Us
              </h2>
              <p className=" text-sm lg:text-xl font-roboto font-normal">
                We are ready to make your business thrive.
              </p>
            </div>
          </div>
          <InquirySection />
          <Offices />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
