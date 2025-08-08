"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ranges = [
  "Tablets",
  "Capsules",
  "Eye Drops",
  "Syrups",
  "Skincare Products",
  "Sachets",
  "Suspensions",
  "Softgels",
];

export default function RangeBar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-gapMed mb-gapLargest">
      {ranges.map((range) => {
        const slug = range.toLowerCase().replace(/ /g, "-");
        const active = pathname === `/${slug}`;

        return (
          <Link
            key={slug}
            href={`/${slug}`}
            className={`px-6 py-2 rounded-full border transition duration-300 text-fontDesk border-gray-300 ${
              active
                ? "bg-gradient-to-r from-primaryOrange to-secondaryYellow text-white"
                : "hover:bg-primaryOrange hover:text-white"
            }`}
          >
            {range}
          </Link>
        );
      })}
    </div>
  );
}
