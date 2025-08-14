import { getBlogs } from "@/apis/get-apis";
import BlogsList from "./BlogsList";

type BlogsListSectionProps = {
  slug?: string;
  pageType: "allBlogs";
};

const BlogsListSection: React.FC<BlogsListSectionProps> = async ({
  slug,
  pageType,
}) => {
  let data: any;

  if (pageType === "allBlogs") {
    data = await getBlogs();
  }

  return (
    <BlogsList
      blogsList={data.data}
      per_page={data.meta.per_page}
      last_page={data.meta.last_page}
      total={data.meta.total}
      pageType={pageType}
    />
  );
};

export default BlogsListSection;
