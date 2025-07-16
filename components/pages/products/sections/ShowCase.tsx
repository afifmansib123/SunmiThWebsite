import ShowCase01 from "@/public/images/section/Hero/ShowCase01.png";
import ShowCase02 from "@/public/images/section/Hero/ShowCase02.png";
import ShowCase03 from "@/public/images/section/Hero/ShowCase03.png";
import ShowCase04Left from "@/public/images/section/Hero/ShowCase04-Left.png";
import ShowCase04Right from "@/public/images/section/Hero/ShowCase04-Right.png";
import Image from "next/image";

export default function ShowCase() {
  return (
    <section className="w-full min-h-screen py-4 lg:py-12">
      <div className="w-full h-full">
        {/* Title */}
        <h1 className="text-center md:text-xl lg:text-2xl xl:text-3xl font-bold py-6 xl:py-12 px-10 xl:px-0">
          “ ยุคใหม่แห่งเทคโนโลยีของความบางเฉียบ
          ผสานความล้ำสมัยและสไตล์ที่เป็นเอกลักษณ์ “
        </h1>
        {/* Content 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center px-12 py-2 lg:py-8">
          {/* Left Content */}
          <div className="w-full h-auto flex flex-col justify-center items-center gap-3">
            <h1 className="text-xl md:text-base lg:text-xl xl:text-2xl font-bold text-primary text-center">
              เร็ว แรง ไม่มีสะดุด <br />
              ตอบโจทย์ทุกธุรกิจ
            </h1>
            <div className="border-b-2 text-black w-[45%]"></div>
            <p className="text-center text-base md:text-xs lg:text-base font-semibold">
              {" "}
              ด้วยขุมพลังระดับสมาร์ทโฟนบนระบบ Android 13
              รองรับการใช้งานในทุกสถานการณ์
              ตอบโจทย์ธุรกิจยุคใหม่ได้อย่างไร้รอยต่อ
            </p>
          </div>
          {/* Middle Content */}
          <div className="w-full h-auto flex justify-center items-center py-8 md:py-0 md:px-6 lg:px-0">
            <Image
              src={ShowCase01}
              alt="ShowCase01"
              width={400}
              height={400}
              className="max-w-[270px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[400px]"
            />
          </div>
          {/* Right Content */}
          <div className="w-full h-auto flex flex-col justify-center items-center gap-3">
            <h1 className="text-xl md:text-base lg:text-xl xl:text-2xl font-bold text-primary text-center">
              ดีไซน์พิถีพิถัน <br />
              สะกดทุกสายตาในทุกมุมมอง
            </h1>
            <div className="border-b-2 text-black w-[45%]"></div>
            <p className="text-center text-base md:text-xs lg:text-base font-semibold">
              ดีไซน์ใหม่บางเฉียบ โค้งมนอย่างพิถีพิถัน
              พร้อมผิวเมทัลลิกสะท้อนความเงางาม
              ยกระดับภาพลักษณ์ สะกดทุกสายตาในทุกมุมมอง
            </p>
          </div>
        </div>

        {/* Content 2 */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 h-auto flex justify-center items-center ">
            <Image
              src={ShowCase02}
              alt="ShowCase02"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
          {/* Right Content */}
          <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-center md:items-start gap-3 px-4">
            <h1 className="text-xl md:text-base lg:text-xl xl:text-2xl font-bold text-primary text-center">
              ใช้งานง่าย ถนัดทุกสัมผัส
            </h1>
            <div className="border-b-2 text-black w-[45%]"></div>
            <p className="text-center md:text-start text-base md:text-xs lg:text-base font-semibold">
              ออกแบบตามหลักสรีรศาสตร์ ขนาดพอดีมือ น้ำหนักเบา
              หน้าจอสัมผัสลื่นไหล ตอบสนองรวดเร็ว
              ให้ประสบการณ์การใช้งานที่คล่องกับทุกสถานการณ์
            </p>
          </div>
        </div>

        {/* Content 3 */}
        <div className="flex flex-col md:flex-row-reverse justify-center items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
            <Image
              src={ShowCase03}
              alt="ShowCase03"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
          {/* Right Content */}
          <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-center md:items-start gap-3 px-4">
            <h1 className="text-xl md:text-base lg:text-xl xl:text-2xl font-bold text-primary text-center">
              รองรับทุกการชำระเงิน ด้วยระบบ NFC
            </h1>
            <div className="border-b-2 text-black w-[45%]"></div>
            <p className="text-center md:text-start text-base md:text-xs lg:text-base font-semibold">
              รองรับทุกการชำระเงินแบบไร้สัมผัสด้วยระบบ NFC รวดเร็ว ปลอดภัย{" "}
              ใช้งานได้กับบัตรเครดิต เดบิต และ e-Wallet เพิ่มความสะดวก
              และยกระดับประสบการณ์ซื้อขายให้ทันสมัยยิ่งขึ้น
            </p>
          </div>
        </div>

        {/* Content 4 */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
            <Image
              src={ShowCase04Left}
              alt="ShowCase04Left"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
          {/* Middle Content */}
          <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-center gap-3 px-4">
            <h1 className="text-xl md:text-base lg:text-xl xl:text-2xl font-bold text-primary text-center">
              พิมพ์ใบเสร็จธรรมดา / เลเบลสติ๊กเกอร์
            </h1>
            <div className="border-b-2 text-black w-[45%]"></div>
            <p className="text-center text-base md:text-xs lg:text-base font-semibold">
              รองรับการพิมพ์ทั้งใบเสร็จธรรมดา และสติ๊กเกอร์เลเบลในเครื่องเดียว
              ช่วยเพิ่มความยืดหยุ่นในการใช้งาน ทั้งหน้าร้าน คลังสินค้า
              และระบบจัดส่ง
            </p>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 h-auto flex justify-center items-center ">
            <Image
              src={ShowCase04Right}
              alt="ShowCase04Right"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
