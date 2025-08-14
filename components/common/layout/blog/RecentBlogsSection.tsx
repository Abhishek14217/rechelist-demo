import Image from "next/image";
import Link from "next/link";

import { getBlogs } from "@/apis/get-apis";
import { Post } from "@/types/blog";
import { format } from "date-fns";

import blogDemo from "@/images/about-company-one.png";

export default async function RecentBlogsSection() {
  const data = await getBlogs();

  // Slice first 5 for recent
  const recentBlogs = data?.data?.slice(0, 5) || [];

  return (
    <div className="flex flex-col gap-gapLargest">
      <h3 className="text-fontDeskLargest font-semibold">Recent Blogs</h3>

      <div className="flex flex-col gap-gap">
        {recentBlogs.map((blog: Post) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="group flex gap-6 items-center"
          >
            {/* Blog Image */}
            <div className="relative w-[6rem] h-full rounded overflow-hidden flex-shrink-0">
              <Image
                src={
                  `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${blog.image}` ||
                  blogDemo
                }
                alt={blog.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Blog Details */}
            <div className="flex flex-col">
              <span className="text-fontDeskLarge font-medium text-gray-800 leading-snug group-hover:text-primaryOrange transition-colors">
                {blog.name}
              </span>
              {blog.created_at && (
                <span className="text-sm text-gray-500">
                  {format(new Date(blog.created_at), "MMMM dd, yyyy")}
                </span>
              )}
              {blog.description && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {blog.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
