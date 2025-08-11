"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbProps = {
  title?: string;
  subtitle?: string | null | undefined;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, subtitle }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((seg) => seg !== "");

  const fallbackSubtitle = "Explore our collection";
  const displaySubtitle = subtitle?.trim() || fallbackSubtitle;

  // Remove unwanted segments like "category" or "type"
  const breadcrumbSegments = [...pathSegments];

  // Remove "category" and "type" segments if they are at index 0
  if (
    breadcrumbSegments[0] === "category" ||
    breadcrumbSegments[0] === "type"
  ) {
    breadcrumbSegments.shift();
  }

  // Helper to format segment text
  const formatSegment = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="flex flex-col gap-gap justify-center items-center">
      <div className="flex flex-col">
        <h1
          className="text-white text-fontDeskLargest md:text-[1.5rem] lg:text-3xl font-bold"
          title={title}
        >
          {title}
        </h1>

        <p className="text-white text-fontDesk md:text-fontDeskLarge">
          {displaySubtitle}
        </p>
      </div>
      <ol className="text-white flex space-x-2 text-fontDesk md:text-fontDeskLarge text-center">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>

        {breadcrumbSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === breadcrumbSegments.length - 1;

          return (
            <li key={href} className="flex items-center space-x-2">
              <span className="mx-2">{">"}</span>
              {isLast ? (
                <span className="capitalize">{formatSegment(segment)}</span>
              ) : (
                <Link href={href} className="hover:underline capitalize">
                  {formatSegment(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumb;
