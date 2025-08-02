import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";

import leftArrow from "@/icons/arrow-left.svg";
import rightArrow from "@/icons/arrow-right.svg";

type TestimonialsCardProps = {
  img: StaticImageData;
  content: string;
  author: string;
  company: string;
  isActive?: boolean;
  sliderRef?: Slider | null;
};

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  img,
  content,
  author,
  company,
  isActive,
  sliderRef,
}) => {
  return (
    <div
      className={`rounded-xl p-4 lg:p-6 flex flex-col md:flex-row gap-4 lg:gap-6 min-h-[23rem] md:min-h-[15rem] transform transition-all duration-1000
      ${
        isActive
          ? "bg-primaryBlue text-white scale-105 z-10 shadow-[0px_0px_6px_1px_rgba(0,0,0,0.2)] mx-gap lg:mx-[unset]"
          : "bg-transparent text-black opacity-70 scale-95"
      }
    `}
    >
      {/* Left Side Image */}
      <div className="flex-shrink-0">
        <Image
          src={img}
          alt={author}
          width={96}
          height={96}
          unoptimized
          className="rounded-full w-20 h-20 md:w-24 md:h-24 object-cover"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col justify-between flex-1 gap-gap">
        <p className="text-fontDesk leading-relaxed font-light">
          {content}
        </p>

        <div className="flex justify-between items-center">
          <div>
            <h6
              className={`font-semibold text-fontDeskLarge ${
                isActive ? "text-white" : "text-black"
              }`}
            >
              {author}
            </h6>
            <p
              className={`italic text-fontDesk ${
                isActive ? "text-white/90" : "text-gray-600"
              }`}
            >
              {company}
            </p>
          </div>

          {/* Show arrows only on active card */}
          {isActive && sliderRef && (
            <div className="flex items-center gap-gap">
              <Image
                src={leftArrow}
                alt="left-arrow"
                height={20}
                width={20}
                unoptimized
                className="size-[1.25rem] cursor-pointer hover:scale-110 transition"
                onClick={() => sliderRef.slickPrev()}
              />
              <Image
                src={rightArrow}
                alt="left-arrow"
                height={20}
                width={20}
                unoptimized
                className="size-[1.25rem] cursor-pointer hover:scale-110 transition"
                onClick={() => sliderRef.slickNext()}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
