import BlogCategories from "./BlogCategories";

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
    <div className="flex flex-col gap-gapLarge">
      <h3 className="text-fontDeskLargest font-semibold">Blog Categories</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <BlogCategories category={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogCategoriesSection;
