import Image, { StaticImageData } from "next/image";

import { UnionBlogsProps } from "@/types/union";
import Breadcrumb from "@/components/ui/Breadcrumb";

import blogBanner from "@/images/blog-banner.jpg";

export default async function BlogsBannerSection(props: UnionBlogsProps) {
  let title: string = "Blogs";
  let subtitle: string = "Insights & Updates in Healthcare";
  let bgImage: string | StaticImageData = blogBanner;

  if (props.pageType === "allBlogs") {
    title = "Blogs";
    subtitle = "Insights & Updates in Healthcare";
    bgImage = blogBanner;
  } else if (props.pageType === "blogDetail") {
    title = "Blog Detail";
    subtitle = "Insights & Updates in Healthcare";
    bgImage = blogBanner;
  } else {
    title = props.data.category.name;
    subtitle = "Insights & Updates in Healthcare";
    bgImage = blogBanner;
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
