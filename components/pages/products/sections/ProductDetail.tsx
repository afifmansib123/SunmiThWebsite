export default function ProductDetail() {
  const cardData = [
    {
      id: 1,
      title: "หน่วยประมวลผล (CPU)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 2,
      title: "ระบบปฏิบัติการ (OS)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 3,
      title: "หน่วยความจำ (Memory)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 4,
      title: "หน้าจอแสดงผล (Display)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 5,
      title: "การสัมผัส (Touch)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 6,
      title: "GMS",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 7,
      title: "เครื่องพิมพ์ (Printer)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 8,
      title: "ปุ่มกด (Button)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 9,
      title: "ช่องใส่ซิม (SIM Card Slot)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 10,
      title: "PSAM",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 11,
      title: "การ์ด SD",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 12,
      title: "พอร์ตเชื่อมต่อ (Port)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 13,
      title: "เครือข่าย (Cellular)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 14,
      title: "Wi-Fi",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 15,
      title: "บลูทูธ (Bluetooth)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 16,
      title: "ระบบระบุตำแหน่ง (GPS)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 17,
      title: "กล้อง (Camera)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 18,
      title: "NFC",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 19,
      title: "เสียง (Audio)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 20,
      title: "แบตเตอรี่ (Battery)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 21,
      title: "ขั้วต่อ Pogo Pin",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 22,
      title: "อะแดปเตอร์ (Adapter)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 23,
      title: "ขนาด (Dimensions)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 24,
      title: "น้ำหนักรวม",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
    {
      id: 25,
      title: "สภาพแวดล้อมในการใช้งาน (Environment)",
      description: "ซีพียู 6 แกนประมวลผลจาก Qualcomm hexa-core",
    },
  ];


  return (
    <section className="w-full h-full">
      <div className="w-full h-full">
        {/* Title */}
        <div className="flex items-center justify-center py-3 md:py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            รายละเอียดผลิตภัณฑ์โดยรวมของ{" "}
            <span className="text-primary">SUNMI</span> V3
          </h1>
        </div>
        {/* Line */}
        <div className="border-b-2 text-black w-auto"></div>
        {/* Content */}
        <div className="flex flex-col justify-between items-center py-6 md:py-10">
    <div className="flex flex-wrap justify-center gap-6">
      {cardData.map((card) => (
        // Card
        <div
          key={card.id}
          className="border rounded-xl shadow-lg w-[180px] h-[130px] md:w-[210px] md:h-[130px] p-4"
        >
          {/* Title Card */}
          <h1 className="font-bold text-sm md:text-sm">{card.title}</h1>
          {/* Description Card */}
          <p className="text-xs md:text-xs">{card.description}</p>
        </div>
      ))}
    </div>
  </div>
      </div>
    </section>
  );
}
