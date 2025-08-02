import BannerContent from "@/components/common/layout/BannerContent";
import BlogsHome from "@/components/common/layout/BlogsHome";
import Certifications from "@/components/common/layout/Certifications";
import HomeProductsList from "@/components/common/layout/HomeProductsList";
import MainBanner from "@/components/common/layout/MainBanner";
import ProductCategoriesList from "@/components/common/layout/ProductCategoriesList";
import ProductRangeList from "@/components/common/layout/ProductRangeList";
import Speciality from "@/components/common/layout/Speciality";
import Testimonials from "@/components/common/layout/Testimonials";

const HomeIndex = () => {
  return (
    <>
      <div className="mt-0 lg:mt-[-6.25rem] relative">
        <MainBanner />
        <BannerContent />
      </div>
      <ProductCategoriesList />
      <ProductRangeList />
      <Certifications />
      <HomeProductsList />
      <Speciality />
      <Testimonials />
      <BlogsHome />
    </>
  );
};

export default HomeIndex;
