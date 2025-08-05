import BannerContent from "@/components/common/layout/BannerContent";
import BlogsHome from "@/components/common/layout/BlogsHome";
import Certifications from "@/components/common/layout/Certifications";
import HomeProductsList from "@/components/common/layout/HomeProductsList";
import MainBanner from "@/components/common/layout/MainBanner";
import ProductCategoriesList from "@/components/common/layout/ProductCategoriesList";
import ProductRangeList from "@/components/common/layout/ProductRangeList";
import Speciality from "@/components/common/layout/Speciality";
import Testimonials from "@/components/common/layout/Testimonials";
import {
  getBannerAndDesc,
  getCertificates,
  getSpeciality,
} from "@/apis/get-static-data";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { getAbsoluteUrl } from "@/utils/helper";
import { getBlogs } from "@/apis/get-blogs";

export const generateMetadata = async () => {
  const pageData = await getBannerAndDesc();
  const pageUrl = getAbsoluteUrl("/");

  return generateSeoMetadata(pageData, pageUrl, "website");
};

export default async function Home() {
  //------PARALLEL DATA FETCHING FOR CRITICAL ELEMENTS--------------------
  const [bannerDesc] = await Promise.all([getBannerAndDesc()]);

  // PARALLEL DATA FETCHING FOR NON CRITICAL ELEMENTS WITH ERROR HANDELLING
  // Errors don’t break other requests (with Promise.allSettled())
  const [allCertificatesResult, specialityResult, blogsResult] =
    await Promise.allSettled([getCertificates(), getSpeciality(), getBlogs()]);

  const allCertificates =
    allCertificatesResult.status === "fulfilled"
      ? allCertificatesResult.value
      : null;

  const specialityData =
    specialityResult.status === "fulfilled" ? specialityResult.value : null;

  const blogsData =
    blogsResult.status === "fulfilled" ? blogsResult.value : null;

  const latestBlogs = blogsData?.data?.slice(0, 4) || [];

  return (
    <main>
      <>
        <div className="mt-0 lg:mt-[-6.25rem] relative">
          <MainBanner bannerImg={bannerDesc.banner_image} />
          <BannerContent
            bannerTitle={bannerDesc.site_title}
            bannerDesc={bannerDesc.site_description}
          />
        </div>
        <ProductCategoriesList />
        <ProductRangeList />
        <Certifications certificates={allCertificates} />
        <HomeProductsList />
        <Speciality data={specialityData} />
        <Testimonials />
        <BlogsHome blogs={latestBlogs} />
      </>
    </main>
  );
}
