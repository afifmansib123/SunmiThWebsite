import MainHeader from "@/components/layout/Header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import bg_about from "@/public/aboutus.png";
import { useLocale } from "next-intl";
import Image from "next/image";

const AboutUs = () => {
	const local = useLocale();

	return (
		<>
			<MainHeader path={"/about_us"} />
			<div className="space-y-5 pt-4 container">
				<div>
					<p className="text-xl font-normal font-roboto">
						{local == "en" ? "About Us" : "เกี่ยวกับเรา"}
					</p>
				</div>
				<div className="">
					<div className="w-full">
						<AspectRatio ratio={16 / 6}>
							<Image src={bg_about} alt="about sunmith" />
						</AspectRatio>
					</div>
				</div>
				<div className="space-y-40">
					<div>
						<h2 className="text-2xl lg:text-5xl font-roboto font-bold">
							Core Value{" "}
							<span className="text-primary">
								{local == "en" ? "Altruism" : "เมตตากรุณา"}
							</span>
						</h2>
					</div>
					<div className="pb-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
						<div className="space-y-2">
							<h2 className="text-base lg:text-xl font-bold font-roboto">
								{local == "en"
									? "Our Philosophy"
									: "วิสัยทัศน์ของเรา"}
							</h2>
							<p className="text-sm lg:text-base font-normal font-roboto">
								{local == "en"
									? "Value SUNMIers by treating them with respect, recognition and understanding. Contribute to the development of society."
									: "ค่านิยม SUNMIers ด้วยการเคารพ, การยอมรับและความเข้าใจ ส่งเสริมการพัฒนาของสังคม."}
							</p>
						</div>
						<div className="space-y-2">
							<h2 className="text-base lg:text-xl font-bold font-roboto">
								{local == "en"
									? "Our Mission"
									: "พันธกิจของเรา"}
							</h2>
							<p className="text-sm lg:text-base font-normal font-roboto">
								{local == "en"
									? "To build a next-gen Business IoT platform with an altruistic mind and eventually achieve Business 4.0."
									: "สร้างแพลตฟอร์มธุรกิจ IoT รุ่นถัดไปด้วยจิตใจที่เมตตาและสุขภาพทางธุรกิจ และในที่สุดบรรลุวัตถุประสงค์ทางธุรกิจ 4.0."}
							</p>
						</div>{" "}
						<div className="space-y-2">
							<h2 className="text-base lg:text-xl font-bold font-roboto">
								{local == "en"
									? "Our Vision"
									: "วิสัยทัศน์ของเรา"}
							</h2>
							<p className="text-sm lg:text-base font-normal font-roboto">
								{local == "en"
									? "To become a top-10 IoT company in the world."
									: "เป็นบริษัท IoT อันดับ 10 ในโลก."}
							</p>
						</div>
					</div>
				</div>
				<div className="w-full my-32">
					<Image
						src="/Sunmi.jpg"
						alt="Sunmi Certification"
						width={800}
						height={450}
						className="mx-auto rounded-lg object-cover my-10"
					/>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
