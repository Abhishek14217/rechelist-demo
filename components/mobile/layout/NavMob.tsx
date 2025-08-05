import { useState } from "react";
import Link from "next/link";

import { MenuGroup } from "@/types/nav-items";

import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";

type NavMobProps = {
  close: () => void;
  navData: MenuGroup;
};

const NavMob: React.FC<NavMobProps> = ({ close, navData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-gap">
      {/* Title */}
      <div className="flex items-center gap-gap py-gapMed px-gapSmall md:px-gapMed border-b border-gray-400 sticky top-0 bg-white z-10">
        <AiOutlineClose
          className="text-[1.5rem] text-gray-500 cursor-pointer"
          onClick={close}
        />
        <h4 className="text-fontDeskLargest md:text-[1.5rem] font-semibold">
          Menu
        </h4>
      </div>

      <ul className="px-gap md:px-gapLarge flex flex-col gap-gapLarge">
        {navData.items.map((item, index) => {
          if (item.url === "button") {
            return (
              <li key={index}>
                <button className="text-fontDesk md:text-fontDeskLarge bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow">
                  {item.title}
                </button>
              </li>
            );
          }

          if (item.has_child && item.children?.length > 0) {
            const isOpen = openIndex === index;
            return (
              <li key={index}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-fontDesk md:text-fontDeskLarge"
                >
                  {item.title}
                  <AiOutlineRight
                    size={"0.75rem"}
                    className={`transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[50rem] mt-2" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={child.url}
                          target={child.target}
                          className="block py-1 text-gray-600 hover:text-primaryOrange text-fontDesk md:text-fontDeskLarge"
                          onClick={close}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          }

          return (
            <li key={index}>
              <Link
                target={item.target}
                href={item.url}
                className="text-fontDesk md:text-fontDeskLarge"
                onClick={close}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMob;
