"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbProps = {
  title?: string;
  subtitle?: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, subtitle }) => {
  const pathname = usePathname();

  // remove empty segments
  const pathSegments = pathname.split("/").filter((seg) => seg !== "");

  return (
    <div className="flex flex-col gap-gap justify-center items-center">
      <div className="flex flex-col">
        <h1
          className="text-white text-fontDeskLargest md:text-[1.5rem] lg:text-3xl font-bold"
          title={title}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-white text-fontDesk md:text-fontDeskLarge">
            {subtitle}
          </p>
        )}
      </div>
      <ol className="text-white flex space-x-2 text-fontDesk md:text-fontDeskLarge text-center">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center space-x-2">
              <span className="mx-2">{">"}</span>
              {isLast ? (
                <span className="capitalize">{segment}</span>
              ) : (
                <Link href={href} className="hover:underline capitalize">
                  {segment}
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
