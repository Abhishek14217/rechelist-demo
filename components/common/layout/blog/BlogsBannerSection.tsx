import Image, { StaticImageData } from "next/image";

import Breadcrumb from "@/components/ui/Breadcrumb";

import demo from "@/images/demo-banner.jpg";

type BlogsBannerSectionProps = {
  slug?: string;
  pageType?: "allBlogs";
};

export default async function BlogsBannerSection({
  slug,
  pageType,
}: BlogsBannerSectionProps) {
  let title: string = "Blogs";
  let subtitle: string = "Explore Our Blogs";
  let bgImage: string | StaticImageData = demo;

  if (pageType === "allBlogs") {
    // API CALL (SEE PRODUCTS PAGE)
    title = "Blogs";
    subtitle = "Explore Our Blogs";
    bgImage = demo;
  }

  return (
    <section className="relative h-[9rem] sm:h-[14rem]">
      <Image src={bgImage} alt={title} priority fill />
      <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange/50 to-secondaryYellow/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <Breadcrumb title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}
