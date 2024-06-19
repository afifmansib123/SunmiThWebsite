'use client';
import branchLocation from "@/data/branchLocation.json";
import { useLocale } from "next-intl";

const Offices = () => {
  const local = useLocale(); // local return th and en value

  return (
    <div className="bg-white py-10">
      {/* main office */}
      <div className="mt-10 space-y-7 xl:space-y-12 container">
        <h2 className="text-center text-2xl font-nato_sans font-bold lg:text-5xl">
          Offices
        </h2>

        <div className="grid sm:grid-cols-2 gap-12 xl:grid-cols-3">
          {branchLocation.BRANCH.map((item, index) => (
            <div
              className="bg-gray-50 p-4 cursor-pointer"
              key={index}
              onClick={() => window.open(item.maps_link, "_blank")}
            >
              <div className="h-[150px]">
                <h2 className="capitalize text-xl text-[#303541] font-medium font-roboto">
                  {item.name}
                </h2>
                <div>
                  <p className="text-base py-2 font-semibold text-primary">
                    {item.phone}
                  </p>
                </div>
                {local === "en" ? (
                  <p className="text-base text-black/60 font-roboto font-medium">
                    {item.address}
                  </p>
                ) : (
                  <p className="text-base text-black/60 font-roboto font-medium">
                    {item.address_thai}
                  </p>
                )}
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${item.office_image})`,
                  }}
                  className="bg-cover h-[220px] bg-no-repeat bg-center"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offices;
