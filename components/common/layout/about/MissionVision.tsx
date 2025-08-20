import Image from "next/image";

import aboutImg from "@/images/about-company-two.png";

type MissonVisionProps = {
  data: { title: string; content: string }[];
};

const MissionVision: React.FC<MissonVisionProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-[3rem] lg:gap-[4rem]">
      {/* Company Profile */}
      <div className="flex flex-col lg:grid lg:grid-cols-[0.5fr_1fr] gap-gapLargest lg:gap-[3rem] items-start">
        <div className="relative h-[20rem] md:h-full w-full">
          <Image
            src={aboutImg}
            alt="about"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <section className="flex flex-col gap-gapSmall lg:gap-gap">
          <h1 className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow">
            Company Profile
          </h1>
          <p className="text-gray-700 leading-relaxed">
            We offer a comprehensive range of over 2500+ high-quality
            pharmaceutical products designed to meet all your healthcare needs.
            From analgesics and antibiotics to anti-allergics and
            anti-inflammatory solutions, our portfolio covers a vast spectrum.
            Our diverse product line includes nutraceuticals, neuropsychiatric
            medicines, hepatoprotectives, and more. Trust us for complete
            healthcare solutions, including medicated soaps & shampoos, cough
            syrups, injections, and specialized formulations.
          </p>
        </section>
      </div>

      {/* Mission & Vision from props */}
      {data.map((item, index) => (
        <section
          key={index}
          className="bg-white p-6 rounded-2xl shadow-custom privacy-content"
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-primaryBlue mb-gapMed">
            {item.title}
          </h3>
          <div
            className="text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </section>
      ))}
    </div>
  );
};

export default MissionVision;
