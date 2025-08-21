import FocusTeam from "@/components/common/layout/about/FocusTeam";
import MissionVision from "@/components/common/layout/about/MissionVision";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";

type FocusItem = {
  title: string;
  content: string;
};

const focusItems: FocusItem[] = [
  {
    title: "Innovation in Pharma",
    content:
      "We drive pharmaceutical innovation through advanced research and cutting-edge solutions to enhance global healthcare.",
  },
  {
    title: "Global Presence & Expansion",
    content:
      "We are expanding our global presence to make high-quality, affordable medicines accessible to communities worldwide.",
  },
  {
    title: "Growth & Future Readiness",
    content:
      "We embrace continuous growth and innovation to stay future-ready in the ever-evolving pharmaceutical landscape.",
  },
  {
    title: "Quality of Primary Health Care",
    content:
      "We ensure the highest standards in primary healthcare by providing safe, effective, and accessible medical solutions for all.",
  },
  {
    title: "Uncompromised Quality",
    content:
      "We are committed to delivering uncompromised quality, ensuring excellence in every product and process.",
  },
  {
    title: "Customer & Patient-Centric Approach",
    content:
      "We prioritize our customers and patients by delivering tailored healthcare solutions that enhance well-being and trust.",
  },
];

const mockVisionMissionData: FocusItem[] = [
  {
    title: "Our Vision",
    content: `
<ul>
<li>To be a globally recognized leader in pharmaceutical innovation and healthcare solutions.</li>
<li>To improve lives by providing high-quality, affordable, and accessible medicines worldwide.</li>
</ul>
    `,
  },
  {
    title: "Our Mission",
    content: `
<ul>
<li>To drive continuous research and development for groundbreaking pharmaceutical advancements.</li>
<li>To maintain the highest standards of quality, safety, and regulatory compliance.</li>
<li>To contribute to a healthier future through ethical, sustainable, and patient-centric practices.</li>
</ul>
    `,
  },
];

const aboutTeamData = {
  title: "Meet Our Expert Pharma Quality Assurance Team Specialists",
  content: `
  <ul>
      <li>Our Quality Checker Team ensures every product meets the highest pharmaceutical standards.</li>
      <li>They conduct rigorous testing and inspections at every stage of manufacturing.</li>
      <li>By maintaining strict compliance with global regulations, they guarantee safety and efficacy.</li>
      <li>Their expertise enhances manufacturing efficiency while upholding uncompromised quality.</li>
      <li>With a commitment to excellence, they drive both productivity and superior healthcare outcomes.</li>
      </ul>
    `,
};

const AboutUs = () => {
  return (
    <div className="mt-0 lg:mt-gapLargest flex flex-col gap-[2rem] lg:gap-[4rem]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-primaryOrange to-secondaryYellow py-7 md:py-9 lg:py-12 text-center">
        <Wrapper>
          <Breadcrumb title="About Us" subtitle="Who We Are" />
        </Wrapper>
      </section>
      <Wrapper>
        <div className="flex flex-col gap-[3rem] lg:gap-[4rem]">
          <MissionVision data={mockVisionMissionData} />
          <FocusTeam focusItems={focusItems} aboutTeamData={aboutTeamData} />
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutUs;
