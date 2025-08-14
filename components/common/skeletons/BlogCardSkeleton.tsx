const BlogCardSkeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="relative w-full sm:w-[15rem] h-[13rem] bg-gray-200" />

      {/* Content Skeleton */}
      <div className="flex flex-col justify-between p-4 w-full">
        {/* Category */}
        <div className="h-4 w-24 bg-gray-200 rounded mb-2" />

        {/* Title */}
        <div className="h-5 w-3/4 bg-gray-200 rounded mb-4" />

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm mb-3">
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-200 rounded" />
          <div className="h-3 w-5/6 bg-gray-200 rounded" />
          <div className="h-3 w-4/6 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
