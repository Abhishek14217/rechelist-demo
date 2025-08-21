import Wrapper from "@/components/ui/Wrapper";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CareerIntro from "@/components/common/layout/career/CareerIntro";
import CareerPerks from "@/components/common/layout/career/CareerPerks";
import CareerForm from "@/components/common/forms/CareerForm";

// Mock dashboard data (replace with API fetch)
const careerData = {
  intro: {
    title: "Join Our Mission in Pharma Innovation",
    description:
      "At Rechelist Pharma, we believe in advancing healthcare through research and innovation. Join our passionate team and contribute to making a difference in global health.",
  },
};

export default function CareerPage() {
  return (
    <div className="mt-0 lg:mt-gapLargest flex flex-col gap-[3rem] lg:gap-[5rem]">
      {/* Top Background + Breadcrumb */}
      <section className="bg-gradient-to-r from-primaryOrange to-secondaryYellow py-7 md:py-9 lg:py-12 text-center">
        <Breadcrumb title="Career" subtitle="Careers at Rechelist Pharma" />
      </section>

      {/* Sections */}
      <Wrapper>
        <div className="flex flex-col gap-[3rem] lg:gap-[5rem]">
          <CareerIntro data={careerData.intro} />
          <CareerPerks />
          <CareerForm />
        </div>
      </Wrapper>
    </div>
  );
}
