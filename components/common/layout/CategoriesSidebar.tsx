"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const categories = [
  "Ortho & Surgery",
  "General",
  "Critical Care",
  "Gastro",
  "Opthalmic Range",
  "Dental Range",
  "ENT",
  "Derma",
  "Gynae",
  "Neuro Psychiatric",
  "Pediatric",
  "Cardiac",
  "Ayurvedic",
];

export default function CategoriesSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full bg-gray-50 shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-lg p-gap flex flex-col gap-gapLarge">
      <h3 className="text-lg font-semibold">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat) => {
          const slug = cat.toLowerCase().replace(/ & | /g, "-");
          const active = pathname === `/${slug}`;

          return (
            <li key={slug}>
              <Link
                href={`/${slug}`}
                className={`block px-3 py-2 rounded-md transition duration-300 ${
                  active
                    ? "bg-gradient-to-r from-primaryOrange to-secondaryYellow text-white"
                    : "hover:bg-primaryOrange/10 hover:text-primaryOrange"
                }`}
              >
                {cat}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
