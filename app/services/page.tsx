import ServiceSection from "@/components/common/layout/services/ServiceSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";

import pcdImg from "@/images/pcd-opportunity-new.png";
import thirdPartyImg from "@/images/pcd-opportunity-new.png";

const ServicesPage = () => {
  return (
    <div className="mt-0 lg:mt-gapLargest flex flex-col gap-[2rem] lg:gap-[4rem]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-primaryOrange to-secondaryYellow py-7 md:py-9 lg:py-12 text-center">
        <Wrapper>
          <Breadcrumb
            title="Services"
            subtitle="Discover the pharma solutions we offer to empower your business"
          />
        </Wrapper>
      </section>
      <Wrapper>
        <div className="flex flex-col gap-gapUltra lg:gap-[4rem]">
          <ServiceSection title="PCD Opportunity" image={pcdImg} />
          <ServiceSection
            title="Third Party Manufacturing"
            image={thirdPartyImg}
            reverse
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default ServicesPage;
