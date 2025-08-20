import Image from "next/image";

import aboutImg from "@/images/about-company-two.png";

type FocusTeamProps = {
  focusItems: { title: string; content: string }[];
  aboutTeamData: { title: string; content: string };
};

const FocusTeam: React.FC<FocusTeamProps> = ({ focusItems, aboutTeamData }) => {
  return (
    <div className="flex flex-col gap-[3rem] lg:gap-[4rem]">
      {/* Our Focus */}
      <section className="mx-auto flex flex-col gap-gap lg:gap-gapLarge">
        <h3 className="text-center text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow">
          Our Focus
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border shadow-md rounded-2xl p-6 text-center"
            >
              <h4 className="text-lg font-semibold text-primaryBlue mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Expert Team */}
      <div className="flex flex-col lg:grid lg:grid-cols-[0.5fr_1fr] gap-gapLarge lg:gap-[3rem] items-start">
        <div className="relative h-[20rem] md:h-full w-full">
          <Image
            src={aboutImg}
            alt="about"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <section className="mx-auto lg:text-left privacy-content">
          <h3 className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow mb-gap">
            {aboutTeamData.title}
          </h3>

          <div
            className="text-gray-700 leading-relaxed space-y-3 max-w-3xl mx-auto lg:mx-0"
            dangerouslySetInnerHTML={{ __html: aboutTeamData.content }}
          />
        </section>
      </div>
    </div>
  );
};

export default FocusTeam;
