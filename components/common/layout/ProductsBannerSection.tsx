import Image from "next/image";

import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  getAllProducts,
  getCategoryWiseProducts,
  getTypeWiseProducts,
} from "@/apis/get-apis";

import demo from "@/images/demo-banner.jpg";

type ProductsBannerSectionProps = {
  slug?: string;
  pageType: "category" | "type" | "allProducts";
};

export default async function ProductsBannerSection({
  slug,
  pageType,
}: ProductsBannerSectionProps) {
  let data: any;
  let title: string;
  let subtitle: string;

  if (pageType === "category") {
    data = await getCategoryWiseProducts(slug!);
    title = data.category?.title || "Products";
    subtitle =
      data.category?.short_description || "Explore Our Wide Range Of Products";
  } else if (pageType === "type") {
    data = await getTypeWiseProducts(slug!);
    title = data.type?.title || "Products";
    subtitle =
      data.type?.short_description || "Explore Our Wide Range Of Products";
  } else {
    data = await getAllProducts();
    title = "Products";
    subtitle = "Explore Our Wide Range Of Products";
  }

  return (
    <section className="relative h-[10rem] sm:h-[14rem] md:h-[22rem] lg:h-[12.875rem]">
      <Image src={demo} alt="banner" priority fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange/60 to-secondaryYellow/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <Breadcrumb title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}
