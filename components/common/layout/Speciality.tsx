import Image from "next/image";

import SectionHeader from "@/components/ui/SectionHeader";
import Wrapper from "@/components/ui/Wrapper";

import map from "@/images/speciality-map.png";
import categoriesIcon from "@/icons/categories-icon.svg";
import classificationIcon from "@/icons/classification-icon.svg";
import divisionIcon from "@/icons/market-div.svg";

const specialityData = [
  {
    img: divisionIcon,
    title: "Our Marketing Divisions",
    content:
      "A wide array of marketing divisions including PCD Pharma Franchise and Third Party Manufacturing",
  },
  {
    img: categoriesIcon,
    title: "Categories",
    content:
      "Different types of product categories include Ayurvedic, Dermatology, Nutraceuticals, General, and Pediatrics.",
  },
  {
    img: classificationIcon,
    title: "Product Classification",
    content:
      "A diverse portfolio of pharma products is available under a range of product classifications such as tablets, capsules, syrups, and injectables.",
  },
];

const Speciality = () => {
  return (
    <div className="mt-sectionGap">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gapUltra lg:gap-20 items-center">
          <div className="flex flex-col gap-gapUltra">
            <SectionHeader
              mainText="Speciality"
              subText="What Makes Us Better Than Others"
              isBlock
            />
            <div className="flex flex-col gap-gapUltra">
              {specialityData.map((item, index) => (
                <div key={index} className="flex gap-gapMed items-start">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="w-8 h-8 text-blue-500"
                  />
                  <div className="flex flex-col gap-gapMed">
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT SECTION MAP IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={map}
              alt="World Map"
              width={700}
              height={400}
              className="object-contain w-full max-w-lg lg:max-w-none"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Speciality;
