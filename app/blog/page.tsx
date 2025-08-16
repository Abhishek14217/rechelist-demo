import { getBlogs } from "@/apis/get-apis";
import BlogListingLayout from "@/components/common/layout/blog/BlogListingLayout";
import { AllBlogsPageProps } from "@/types/union";

const AllBlogsPage = async () => {
  const blogsData = await getBlogs();
  const recentBlogsData = blogsData.data.slice(0, 5);

  const props: AllBlogsPageProps = {
    pageType: "allBlogs",
    data: blogsData,
    recentData: recentBlogsData,
  };
  return <BlogListingLayout {...props} />;
};

export default AllBlogsPage;
