import BannerSkeleton from "@/components/common/skeletons/BannerSkeleton";
import BlogCategoriesSkeleton from "@/components/common/skeletons/BlogCategoriesSkeleton";
import RecentBlogsSkeleton from "@/components/common/skeletons/RecentBlogsSkeleton";
import BlogsListSkeleton from "@/components/common/skeletons/BlogsListSkeleton";
import Wrapper from "@/components/ui/Wrapper";

const BlogsLayout = () => {
  return (
    <div className="mt-0 lg:mt-gapLargest">
      <BannerSkeleton />
      <Wrapper>
        <div className="mx-auto mt-gapUltra flex flex-col lg:grid lg:grid-cols-[1fr_0.4fr] gap-8 lg:gap-20">
          <BlogsListSkeleton count={10} />
          <main className="flex flex-col gap-[3rem]">
            <BlogCategoriesSkeleton />
            <RecentBlogsSkeleton />
          </main>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogsLayout;
