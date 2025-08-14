const BlogCategoriesSkeleton = () => {
  return (
    <div className="flex flex-col gap-gapLargest">
      <div className="h-[1.5rem] w-[10rem] bg-gray-200 rounded animate-pulse" />

      <div className="flex flex-col gap-gap">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-[1.25rem] w-[12rem] bg-gray-200 rounded animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCategoriesSkeleton;
