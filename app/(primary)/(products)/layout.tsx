import { getFeaturedProducts, getTestimonials } from "@/apis/get-apis";
import HomeProductsList from "@/components/common/layout/HomeProductsList";
import Testimonials from "@/components/common/layout/Testimonials";

export default async function ProductsParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch once & cache for 1 hour
  const [featuredData, testimonialsData] = await Promise.all([
    getFeaturedProducts(),
    getTestimonials(),
  ]);

  return (
    <>
      {children}
      <HomeProductsList products={featuredData} />
      <Testimonials testimonials={testimonialsData} />
    </>
  );
}
