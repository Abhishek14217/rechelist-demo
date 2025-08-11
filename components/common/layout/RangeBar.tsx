"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { CategoriesResponse } from "@/types/products";

type RangeBarProps = {
  rangeList: CategoriesResponse;
};

const RangeBar: React.FC<RangeBarProps> = ({ rangeList }) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Sentinel div right above the bar */}
      <div ref={sentinelRef} className="h-0" />

      <div
        className={`sticky top-0 z-20 w-full transition-colors hidden p-gap lg:flex flex-wrap gap-4 mb-gapLargest bg-white ${
          scrolled ? "border border-gray-200 ring-1 ring-gray-100 bg-gray-50 shadow-sm" : "border-transparent" 
        }`}
      >
        {rangeList.data.map((range) => {
          const slug = range.slug;
          const pathParts = pathname.split("/");
          const currentSlug = pathParts[2];
          const active = currentSlug === slug;

          return (
            <Link
              key={slug}
              href={`/type/${slug}`}
              className={`px-6 py-2 rounded-full border transition duration-300 text-fontDesk border-gray-300 ${
                active
                  ? "bg-gradient-to-r from-primaryOrange to-secondaryYellow text-white"
                  : "hover:bg-primaryOrange hover:text-white"
              }`}
            >
              {range.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default RangeBar;
