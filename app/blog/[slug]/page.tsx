import Wrapper from "@/components/ui/Wrapper";
import BlogCategoriesSection from "@/components/common/layout/blog/BlogCategoriesSection";
import BlogsBannerSection from "@/components/common/layout/blog/BlogsBannerSection";
import RecentBlogsSection from "@/components/common/layout/blog/RecentBlogsSection";
import SingleBlogDetail from "@/components/common/layout/blog/SingleBlogDetail";
import { getBlogs } from "@/apis/get-apis";
import { BlogDetailPageProps } from "@/types/union";

const BlogDetail = async () => {
  const blogsData = await getBlogs();
  const recentBlogsData = blogsData.data.slice(0, 5);

  const props: BlogDetailPageProps = {
    pageType: "blogDetail",
    recentData: recentBlogsData,
  };

  return (
    <div className="mt-0 lg:mt-gapLargest">
      <BlogsBannerSection {...props} />
      <Wrapper>
        {/* Mobile layout */}
        <div className="md:hidden mx-auto mt-gapLargest lg:mt-gapUltra flex flex-col gap-8">
          <SingleBlogDetail />
          <BlogCategoriesSection />
          <RecentBlogsSection {...props} />
        </div>

        {/* Desktop layout  */}
        <div className="hidden md:grid mx-auto mt-gapLargest lg:mt-gapUltra grid-cols-[1fr_0.4fr] gap-8 lg:gap-20">
          <SingleBlogDetail />
          <main className="flex flex-col gap-[3rem] h-fit sticky md:top-20 lg:top-8">
            <BlogCategoriesSection />
            <RecentBlogsSection {...props} />
          </main>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogDetail;
