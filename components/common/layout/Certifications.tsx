import Image from "next/image";

import Wrapper from "@/components/ui/Wrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { CertificationsType } from "@/types/static-items";

import aboutOne from "@/images/about-company-one.png";
import aboutTwo from "@/images/about-company-two.png";

type CertificationsProps = {
  certificates: CertificationsType;
};

const Certifications: React.FC<CertificationsProps> = ({ certificates }) => {
  return (
    <>
      {/* --------------------------CERTIFICATIONS---------------------------- */}
      <div className="mt-gapUltra lg:mt-sectionGap">
        <Wrapper>
          <div className="flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-gapUltra md:gap-[4rem]">
            <div className="flex flex-col gap-gap">
              <SectionHeader
                mainText="Certifications"
                subText={certificates.title}
                isBlock
                subTextClass="text-fontDeskLarge md:text-[1.5rem] lg:text-fontDeskUltra"
              />
              <p className="text-fontDesk md:text-fontDeskLarge">
                {certificates.description}
              </p>
            </div>
            <div className="flex lg:justify-between items-center overflow-x-scroll no-scrollbar gap-gapLargest lg:gap-0">
              {certificates.certifications.map((item, index) => (
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${item.image}`}
                  alt={`certificate-${index}`}
                  width={140}
                  height={140}
                  className="size-[6rem] lg:size-[8.75rem]"
                  key={index}
                />
              ))}
            </div>
          </div>
        </Wrapper>
      </div>

      {/* --------------------------ABOUT COMPANY SECITON---------------------------- */}
      <div className="mt-gapUltra lg:mt-sectionGap bg-lightGray pt-[2rem] lg:pt-[3rem] pb-[2rem] lg:pb-[4.5rem]">
        <Wrapper>
          <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-gapLargest items-center lg:max-w-[70rem] mx-auto">
            {/* LEFT SECTION */}
            <div className="relative flex justify-center items-center">
              {/* Main doctor/scientist image */}
              <Image
                src={aboutOne}
                alt="About Company"
                className="rounded-2xl w-[15rem] h-[20rem] lg:w-[20rem] lg:h-[25.75rem] object-cover shadow-md"
              />
              {/* Small image overlapping */}
              <Image
                src={aboutTwo}
                alt="About Company"
                className="absolute bottom-[1.5rem] left-[-3rem] lg:left-[-4.5rem] w-[10rem] lg:w-[12.5rem] h-[12rem] lg:h-[13.75rem] rounded-xl object-cover shadow-lg border-4 border-white"
              />
              {/* Badge */}
              <div className="absolute bottom-12 left-[45%] md:left-[35%] transform -translate-x-1/2 bg-gradient-to-r from-primaryOrange to-secondaryYellow text-white px-6 py-6 rounded-full shadow-lg flex flex-col items-center justify-center w-20 h-20">
                <span className="text-2xl font-bold">4+</span>
                <span className="text-fontDesk font-medium">UNITS</span>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex flex-col gap-gapLargest">
              <SectionHeader
                mainText="About Company"
                subText="Empowering Healthcare with Innovation"
                isBlock
                subTextClass="text-[0.95rem] md:text-[1.5rem] lg:text-fontDeskUltra"
              />
              <div className="flex flex-col gap-gapSmall text-fontDesk">
                <p className="leading-relaxed">
                  Rechelist Pharma is a trusted name in the pharmaceutical
                  industry, committed to delivering excellence through
                  innovation, quality, and integrity. As a leading provider of
                  PCD Pharma Franchise and Third Party Manufacturing services,
                  we empower healthcare businesses across India with
                  high-quality, affordable medicines.
                </p>
                <p className="leading-relaxed">
                  Driven by a strong mission and vision, we focus on building
                  long-term partnerships with our clients by offering reliable
                  products, transparent processes, and timely support. With a
                  wide range of DCGI-approved formulations and WHO–GMP certified
                  manufacturing facilities, we ensure that every product meets
                  the highest standards of safety and efficacy.
                </p>
                <p className="leading-relaxed">
                  At Rechelist Pharma, we don’t just make medicines — we build
                  trust, enable growth, and contribute to a healthier future.
                </p>
              </div>

              <Button
                text="Know More About Us"
                href="#"
                type="link"
                className="w-fit mx-auto md:mx-[unset] text-white px-4 lg:px-6 py-2 rounded-full transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow hover:opacity-90 text-fontDesk lg:text-fontDeskLarge"
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Certifications;

//------------------EXTRA CODE-----------------------
// import iso from "@/images/iso.png";
// import gmp from "@/images/gmp.png";
// import who from "@/images/who.png";
// const certificateData = [
//   { title: "ISO", img: iso },
//   { title: "GMP", img: gmp },
//   { title: "WHO", img: who },
// ];
