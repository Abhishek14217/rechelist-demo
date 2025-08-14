import { Suspense } from "react";

import Wrapper from "@/components/ui/Wrapper";
import BannerSkeleton from "@/components/common/skeletons/BannerSkeleton";
import BlogCategoriesSkeleton from "@/components/common/skeletons/BlogCategoriesSkeleton";
import RecentBlogsSkeleton from "@/components/common/skeletons/RecentBlogsSkeleton";
import BlogsListSkeleton from "@/components/common/skeletons/BlogsListSkeleton";
import BlogsBannerSection from "./BlogsBannerSection";
import BlogCategoriesSection from "./BlogCategoriesSection";
import RecentBlogsSection from "./RecentBlogsSection";
import BlogsListSection from "./BlogsListSection";

type BlogListingLayoutProps = {
  slug?: string;
  pageType: "allBlogs";
};

const BlogListingLayout: React.FC<BlogListingLayoutProps> = ({
  slug,
  pageType,
}) => {
  return (
    <div className="mt-0 lg:mt-gapLargest">
      <Suspense fallback={<BannerSkeleton />}>
        <BlogsBannerSection slug={slug} pageType={pageType} />
      </Suspense>
      <Wrapper>
        <div className="mx-auto mt-gapUltra flex flex-col lg:grid lg:grid-cols-[1fr_0.4fr] gap-8 lg:gap-20">
          <Suspense fallback={<BlogsListSkeleton count={10} />}>
            <BlogsListSection slug={slug} pageType={pageType} />
          </Suspense>

          <main className="flex flex-col gap-[3rem]">
            <Suspense fallback={<BlogCategoriesSkeleton />}>
              <BlogCategoriesSection />
            </Suspense>

            <Suspense fallback={<RecentBlogsSkeleton />}>
              <RecentBlogsSection />
            </Suspense>
          </main>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogListingLayout;
