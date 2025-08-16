import BlogsList from "./BlogsList";
import { UnionBlogsProps } from "@/types/union";

const BlogsListSection = (props: UnionBlogsProps) => {
  const { data, pageType, slug } = props;

  return (
    <div className="flex flex-col gap-gap lg:gap-gapLargest">
      <h3 className="text-fontDeskLargest lg:text-[2rem] font-semibold lg:text-center">Explore All Blogs</h3>
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
