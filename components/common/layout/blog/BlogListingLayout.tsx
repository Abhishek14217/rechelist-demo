import Wrapper from "@/components/ui/Wrapper";
import BlogsBannerSection from "./BlogsBannerSection";
import BlogCategoriesSection from "./BlogCategoriesSection";
import RecentBlogsSection from "./RecentBlogsSection";
import BlogsListSection from "./BlogsListSection";
import { UnionBlogsProps } from "@/types/union";

const BlogListingLayout = (props: UnionBlogsProps) => {
  return (
    <div className="mt-0 lg:mt-gapLargest">
      <BlogsBannerSection {...props} />
      <Wrapper>
        <div className="mx-auto mt-gapUltra flex flex-col lg:grid lg:grid-cols-[1fr_0.4fr] gap-8 lg:gap-20">
          <BlogsListSection {...props} />
          <main className="flex flex-col gap-[3rem] h-fit sticky top-0">
            <BlogCategoriesSection />
            <RecentBlogsSection {...props} />
          </main>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogListingLayout;
