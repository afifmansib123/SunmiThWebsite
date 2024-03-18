"use client";
import { FiChevronDown } from "react-icons/fi";

import { Link } from "@/navigation";
import { useLocale } from "next-intl";

import { useState } from "react";

const LocaleSwitcher = ({ path }: { path: any }) => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            aria-label="open_locale"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition ease-in-out duration-150"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {locale === "en" ? "🇺🇸 EN" : "🇹🇭 ไทย"}
            <FiChevronDown className=" w-5 h-5" />
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              // onClick={() => handleChange("en")}
              href={path}
              locale="en"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              🇺🇸 Eng
            </Link>
            <Link
              href={path}
              locale="th"
              // onClick={() => handleChange("th")}
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              🇹🇭 ไทย
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
