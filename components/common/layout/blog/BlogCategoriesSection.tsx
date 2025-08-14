import React from "react";
import Link from "next/link";

const BlogCategoriesSection = () => {
  // Dummy pharma-related categories
  const categories = [
    { name: "Orthopedics", slug: "orthopedics" },
    { name: "ENT (Ear, Nose & Throat)", slug: "ent" },
    { name: "Cardiology", slug: "cardiology" },
    { name: "Neurology", slug: "neurology" },
    { name: "Oncology", slug: "oncology" },
    { name: "Dermatology", slug: "dermatology" },
    { name: "Pediatrics", slug: "pediatrics" },
    { name: "Ophthalmology", slug: "ophthalmology" },
  ];

  return (
    <div className="flex flex-col gap-gapLargest">
      <h3 className="text-fontDeskLargest font-semibold">Blog Categories</h3>
      <div className="flex flex-col gap-gap">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/category/${category.slug}`}
            className="w-fit"
          >
            <span className="text-fontDeskLarge text-gray-800 leading-snug transition-colors duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primaryOrange hover:to-secondaryYellow">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategoriesSection;
