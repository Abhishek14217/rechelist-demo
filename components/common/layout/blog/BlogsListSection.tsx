import BlogsList from "./BlogsList";
import { UnionBlogsProps } from "@/types/union";

const BlogsListSection = (props: UnionBlogsProps) => {
  const { data, pageType, slug } = props;

  return (
    <div className="flex flex-col gap-gapLargest">
      <h3 className="text-[2rem] font-semibold text-center">Explore All Blogs</h3>
      <BlogsList
        blogsList={data.data}
        per_page={data.meta.per_page}
        last_page={data.meta.last_page}
        total={data.meta.total}
        pageType={pageType}
        slug={slug}
      />
    </div>
  );
};

export default BlogsListSection;
