import { getBlogs, getCategoryWiseBlogs } from "@/apis/get-apis";
import BlogListingLayout from "@/components/common/layout/blog/BlogListingLayout";
import { CategoryBlogsPageProps } from "@/types/union";

type Params = Promise<{ slug: string }>;

const BlogCatPage = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const categoryBlogsData = await getCategoryWiseBlogs(slug);

  const blogsData = await getBlogs();
  const recentBlogsData = blogsData.data.slice(0, 5);

  const props: CategoryBlogsPageProps = {
    pageType: "categoryBlogs",
    data: categoryBlogsData,
    recentData: recentBlogsData,
  };

  return <BlogListingLayout {...props} />;
};

export default BlogCatPage;
