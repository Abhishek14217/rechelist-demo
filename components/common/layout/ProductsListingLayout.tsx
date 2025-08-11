import Image from "next/image";

import CategoriesSidebar from "@/components/common/layout/CategoriesSidebar";
import RangeBar from "@/components/common/layout/RangeBar";
import ProductsGrid from "@/components/common/layout/ProductsGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";
import HomeProductsList from "./HomeProductsList";
import Testimonials from "./Testimonials";
import { CategoriesResponse, Product } from "@/types/products";
import {
  getCategories,
  getFeaturedProducts,
  getRange,
  getTestimonials,
} from "@/apis/get-apis";

import demo from "@/images/demo-banner.jpg";

interface ProductListingLayoutProps {
  title?: string;
  subtitle?: string | null | undefined;
  productsList: Product[];
  per_page?: number;
  last_page?: number;
  total?: number;
  pageType?: string;
}

const ProductListingLayout = async ({
  title,
  subtitle,
  productsList,
  per_page,
  last_page,
  total,
  pageType,
}: ProductListingLayoutProps) => {
  //-----------------------API CALLS-------------------------------
  const [categories, productsRange]: [CategoriesResponse, CategoriesResponse] =
    await Promise.all([getCategories(), getRange()]);

  const [featuredProductsResult, testimonialsResult] = await Promise.allSettled(
    [getFeaturedProducts(), getTestimonials()]
  );

  const featuredData =
    featuredProductsResult.status === "fulfilled"
      ? featuredProductsResult.value
      : null;

  const testimonialsData =
    testimonialsResult.status === "fulfilled" ? testimonialsResult.value : null;

  return (
    <>
      <section className="relative h-[10rem] sm:h-[14rem] md:h-[22rem] lg:h-[12.875rem] mt-sectionGap">
        <Image
          src={demo}
          alt="banner"
          priority={true}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange/60 to-secondaryYellow/60  "></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Breadcrumb title={title} subtitle={subtitle} />
        </div>
      </section>

      <Wrapper>
        <div className="mx-auto mt-sectionGap flex flex-col lg:grid lg:grid-cols-[0.35fr_1fr] gap-8 lg:gap-12">
          <CategoriesSidebar categoriesList={categories} />
          <main className="flex-1">
            <RangeBar rangeList={productsRange} />
            <ProductsGrid
              productsList={productsList}
              per_page={per_page}
              last_page={last_page}
              total={total}
              pageType={pageType}
            />
          </main>
        </div>
      </Wrapper>
      <HomeProductsList products={featuredData} />
      <Testimonials testimonials={testimonialsData} />
    </>
  );
};

export default ProductListingLayout;

//-----------EXTRA CODE--------------------
{
  /* <section className="bg-gradient-to-r from-primaryOrange to-secondaryYellow py-[4rem] mt-sectionGap text-center"> */
}
{
  /* <div className="relative h-[10rem] sm:h-[14rem] md:h-[22rem] lg:h-[27.875rem]">
        <Image src={demo} alt={"banner"} priority={true} fill />
      </div>
      <Breadcrumb title={title} subtitle={subtitle} /> */
}
