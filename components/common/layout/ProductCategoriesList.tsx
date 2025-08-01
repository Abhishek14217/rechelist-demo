import Image from "next/image";
import Link from "next/link";

import SectionHeader from "@/components/ui/SectionHeader";
import Wrapper from "@/components/ui/Wrapper";

import ortho from "@/images/ortho.svg";
import gastro from "@/images/gastro.svg";
import ent from "@/images/ent.svg";
import cardiac from "@/images/cardiac.svg";
import derma from "@/images/derma.svg";
import paediatric from "@/images/pediatric.svg";
import ayurvedic from "@/images/ayurvedic.svg";
import franchiseBg from "@/images/franchise-bg.png";
import headerCommon from "@/images/section-header.svg";
import pcdOpportunityNew from "@/images/pcd-opportunity-new.png";
import arrowIcon from "@/icons/arrow-right-up.svg";
// import pcdOpportunity from "@/images/pcd-opportunity.png";

const catList = [
  { title: "Ortho & Surgery", image: ortho, path: "#" },
  { title: "Gastro", image: gastro, path: "#" },
  { title: "ENT", image: ent, path: "#" },
  { title: "Cardiac", image: cardiac, path: "#" },
  { title: "Derma", image: derma, path: "#" },
  { title: "Paediatric", image: paediatric, path: "#" },
  { title: "Ayurvedic", image: ayurvedic, path: "#" },
];

const ProductCategoriesList = () => {
  return (
    <>
      {/* --------------------------PRODUCTS CATEGORIES---------------------------- */}
      <div className="mt-sectionGap">
        <Wrapper>
          <div className="flex flex-col gap-gapUltra">
            <SectionHeader mainText="Categories" subText="Product Categories" />
            <div className="flex items-center justify-between">
              {catList.map((item, index) => (
                <Link
                  href={`/${item.path}`}
                  className="flex flex-col items-center gap-gap"
                  key={index}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={70}
                    width={70}
                    className="h-[4.375rem] w-[4.375rem]"
                    unoptimized
                  />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>

      {/* --------------------------PCD PHARMA OPPORTUNITY---------------------------- */}
      <div className="mt-sectionGap">
        <Wrapper>
          <div
            className="rounded-2xl bg-cover bg-no-repeat overflow-hidden max-w-[75rem] mx-auto"
            style={{ backgroundImage: `url(${franchiseBg.src})` }}
          >
            {/* Gradient Heading with Icon */}
            <div className="relative w-fit mx-auto mt-gap px-[9rem] py-2 rounded-full transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow">
              <span className="text-white text-fontDeskLargest font-bold">
                PCD Franchise Opportunity
              </span>
              <Image
                src={headerCommon}
                alt="header-icon"
                height={32}
                width={32}
                unoptimized
                className="w-[2rem] h-[2rem] absolute top-1/2 -translate-y-1/2 right-[18%]"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-gapLargest p-8 lg:p-12">
              {/* ---------------- Left Content ---------------- */}
              <div className="flex flex-col gap-gap">
                {/* Paragraph */}
                <p className="leading-relaxed text-fontDesk">
                  At Rechelist Pharma, we offer reliable and high-quality Third
                  Party Manufacturing services to support pharma businesses
                  looking to expand without investing in costly infrastructure.
                  With our WHO–GMP certified manufacturing units, modern
                  technology, and stringent quality controls, we deliver
                  consistent and timely pharmaceutical production across a wide
                  range of formulations.
                </p>

                <p className="leading-relaxed text-fontDesk">
                  We handle everything from formulation development to packaging
                  and delivery, ensuring full compliance with industry standards
                  and regulatory norms. Our transparent process, dedicated
                  support, and flexible production capacities make us a trusted
                  partner for both startups and established brands.
                </p>

                {/* What We Offer */}
                <div>
                  <h3 className="font-bold text-lg mb-2">What We Offer:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-fontDesk">
                    <li>WHO–GMP certified facilities</li>
                    <li>DCGI–approved product range</li>
                    <li>Custom branding & packaging support</li>
                    <li>Timely delivery with full documentation</li>
                    <li>Strict quality assurance & batch testing</li>
                  </ul>
                </div>
              </div>

              {/* ---------------- Right Image ---------------- */}
              <div className="relative">
                <Image
                  src={pcdOpportunityNew}
                  alt="franchise"
                  fill
                  unoptimized
                />

                {/* Small Arrow Button */}
                <Link
                  href="#"
                  className="absolute -bottom-1 right-0 bg-gradient-to-r from-primaryOrange to-secondaryYellow 
               w-[3rem] h-[3rem] flex items-center justify-center 
               rounded-full shadow-lg hover:scale-105 transition"
                >
                  <Image
                    src={arrowIcon}
                    alt="arrow"
                    width={20}
                    height={20}
                    unoptimized
                  />
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ProductCategoriesList;
