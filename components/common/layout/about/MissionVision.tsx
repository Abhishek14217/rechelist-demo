import Image from "next/image";

import aboutImg from "@/images/about-company-two.png";

type MissonVisionProps = {
  data: { title: string; content: string }[];
};

const MissionVision: React.FC<MissonVisionProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-[3rem] lg:gap-[4rem]">
      {/* Company Profile */}
      <div className="flex flex-col md:grid md:grid-cols-[0.5fr_1fr] gap-gapLargest lg:gap-[3rem] items-center">
        <div className="relative h-[20rem] md:h-full lg:h-[25rem] w-full">
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
            Rechelist Pharma is a trusted name in the pharmaceutical industry,
            committed to delivering excellence through innovation, quality, and
            integrity. As a leading provider of PCD Pharma Franchise and Third
            Party Manufacturing services, we empower healthcare businesses
            across India with high-quality, affordable medicines.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Driven by a strong mission and vision, we focus on building
            long-term partnerships with our clients by offering reliable
            products, transparent processes, and timely support. With a wide
            range of DCGI-approved formulations and WHO–GMP certified
            manufacturing facilities, we ensure that every product meets the
            highest standards of safety and efficacy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Rechelist Pharma, we don’t just make medicines — we build trust,
            enable growth, and contribute to a healthier future.
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
