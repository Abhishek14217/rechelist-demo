import Image from "next/image";
import Link from "next/link";

import SectionHeader from "@/components/ui/SectionHeader";
import Wrapper from "@/components/ui/Wrapper";
import { CategoriesResponse } from "@/types/products";
import { PcdFranchiseResponse } from "@/types/static-items";
import { getCategories, getPcdOpportunity } from "@/apis/get-apis";

import headerCommon from "@/images/section-header.svg";
import arrowIcon from "@/icons/arrow-right-up.svg";

const ProductCategoriesList = async () => {
  const categories: CategoriesResponse = await getCategories();
  const pcdResponse: PcdFranchiseResponse = await getPcdOpportunity();

  const filteredCategories = categories.data
    .filter((item) => item.image !== null)
    .slice(0, 7);

  return (
    <>
      {/* --------------------------PRODUCTS CATEGORIES---------------------------- */}
      <div className="mt-gapUltra lg:mt-sectionGap">
        <Wrapper>
          <div className="flex flex-col gap-gapLargest lg:gap-gapUltra">
            <SectionHeader mainText="Categories" subText="Product Categories" />
            <div className="flex items-center justify-between gap-gap lg:gap-0 overflow-x-scroll no-scrollbar">
              {filteredCategories.map((item, index) => (
                <Link
                  href={`/category/${item.slug}`}
                  className="flex flex-col items-center gap-gap"
                  key={index}
                >
                  <div className="relative h-[3.5rem] w-[3.5rem] md:h-[4.375rem] md:w-[4.375rem]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${item.image}`}
                      alt={item.title}
                      fill
                      unoptimized
                    />
                  </div>
                  <span className="text-fontDeskSmall md:text-fontDeskLarge whitespace-nowrap md:whitespace-normal">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>

      {/* --------------------------PCD PHARMA OPPORTUNITY---------------------------- */}
      <div className="mt-gapUltra lg:mt-sectionGap">
        <Wrapper>
          <div className="rounded-2xl overflow-hidden max-w-[unset] lg:max-w-[75rem] mx-auto bg-[#ffede8] lg:bg-transparent lg:bg-[url('/franchise-bg.png')] lg:bg-cover lg:bg-no-repeat">
            {/* Gradient Heading with Icon */}
            <div className="relative w-fit mx-auto mt-gap px-[2.5rem] lg:px-[9rem] py-2 rounded-full transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow">
              <span className="text-white text-fontDeskLarge md:text-fontDeskLargest font-bold">
                {pcdResponse.data.title}
              </span>
              <Image
                src={headerCommon}
                alt="header-icon"
                height={32}
                width={32}
                unoptimized
                className="size-[1.5rem] lg:w-[2rem] lg:h-[2rem] absolute top-1/2 -translate-y-1/2 right-[2%] lg:right-[18%]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-gapLargest p-6 md:p-12">
              {/* ---------------- Left Content ---------------- */}
              <div className="flex flex-col gap-gap">
                {/* Paragraph */}
                <p
                  className="leading-relaxed text-fontDesk whitespace-pre-line"
                  dangerouslySetInnerHTML={{
                    __html: pcdResponse.data.content,
                  }}
                />

                {/* What We Offer */}
                <div>
                  <h3 className="font-bold text-lg mb-2">What We Offer:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-fontDesk">
                    {pcdResponse.data.offers.map((item, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: item,
                        }}
                      />
                    ))}
                  </ul>
                </div>
              </div>

              {/* ---------------- Right Image ---------------- */}
              <div className="relative h-[20rem] lg:h-[unset]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${pcdResponse.data.image}`}
                  alt="franchise"
                  fill
                  unoptimized
                />

                {/* Small Arrow Button */}
                <Link
                  href="/pcd-opportunity"
                  className="absolute -bottom-1 right-0 bg-gradient-to-r from-primaryOrange to-secondaryYellow 
               size-[2.5rem] lg:w-[3rem] lg:h-[3rem] flex items-center justify-center 
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

//----------------------------EXTRA CODE-------------------------------
// import pcdOpportunityNew from "@/images/pcd-opportunity-new.png";
// import pcdOpportunity from "@/images/pcd-opportunity.png";
// import ortho from "@/images/ortho.svg";
// import gastro from "@/images/gastro.svg";
// import ent from "@/images/ent.svg";
// import cardiac from "@/images/cardiac.svg";
// import derma from "@/images/derma.svg";
// import paediatric from "@/images/pediatric.svg";
// import ayurvedic from "@/images/ayurvedic.svg";
// const catList = [
//   { title: "Ortho & Surgery", image: ortho, path: "#" },
//   { title: "Gastro", image: gastro, path: "#" },
//   { title: "ENT", image: ent, path: "#" },
//   { title: "Cardiac", image: cardiac, path: "#" },
//   { title: "Derma", image: derma, path: "#" },
//   { title: "Paediatric", image: paediatric, path: "#" },
//   { title: "Ayurvedic", image: ayurvedic, path: "#" },
// ];
