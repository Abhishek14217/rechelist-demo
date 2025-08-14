import BlogCardSkeleton from "./BlogCardSkeleton";

export default function BlogsListSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}
