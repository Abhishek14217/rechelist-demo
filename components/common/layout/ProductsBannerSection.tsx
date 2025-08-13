import Image, { StaticImageData } from "next/image";

import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  getAllProducts,
  getCategoryWiseProducts,
  getTypeWiseProducts,
} from "@/apis/get-apis";
import MobileCategoryBar from "@/components/mobile/layout/MobileCategoryBar";
import Wrapper from "@/components/ui/Wrapper";

import demo from "@/images/demo-banner.jpg";

type ProductsBannerSectionProps = {
  slug?: string;
  pageType?: "category" | "type" | "allProducts";
};

export default async function ProductsBannerSection({
  slug,
  pageType,
}: ProductsBannerSectionProps) {
  let data: any;
  let title: string;
  let subtitle: string;
  let bgImage: string | StaticImageData = demo;

  if (pageType === "category") {
    data = await getCategoryWiseProducts(slug!);
    title = data.category?.title || "Products";
    subtitle =
      data.category?.short_description || "Explore Our Wide Range Of Products";
    bgImage = data.category?.banner_image
      ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${data.category.banner_image}`
      : demo;
  } else if (pageType === "type") {
    data = await getTypeWiseProducts(slug!);
    title = data.type?.title || "Products";
    subtitle =
      data.type?.short_description || "Explore Our Wide Range Of Products";
    bgImage = data.type?.banner_image
      ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${data.type.banner_image}`
      : demo;
  } else {
    data = await getAllProducts();
    title = "Products";
    subtitle = "Explore Our Wide Range Of Products";
    bgImage = data.allproducts?.banner_image
      ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${data.allproducts.banner_image}`
      : demo;
  }

  return (
    <div className="flex flex-col gap-gapUltra">
      <section className="relative h-[9rem] sm:h-[14rem]">
        <Image src={bgImage} alt={title} priority fill />
        <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange/50 to-secondaryYellow/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Breadcrumb title={title} subtitle={subtitle} />
        </div>
      </section>
      <Wrapper>
        <MobileCategoryBar activeCategory={slug ? title : "All Products"} />
      </Wrapper>
    </div>
  );
}
