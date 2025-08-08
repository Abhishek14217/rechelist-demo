"use client";

import { useState } from "react";
import Slider from "react-slick";

import SectionHeader from "@/components/ui/SectionHeader";
import Wrapper from "@/components/ui/Wrapper";
import TestimonialsCard from "./TestimonialsCard";
import { TestimonialsResponse } from "@/types/static-items";

type TestimonialsProps = {
  testimonials: TestimonialsResponse;
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slider, setSlider] = useState<Slider | null>(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "350px",
    slidesToShow: 1,
    speed: 1000,
    arrows: false,
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
    afterChange: (current: number) => setActiveSlide(current),

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerMode: true,
          centerPadding: "200px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "150px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-gapUltra lg:mt-sectionGap">
      <Wrapper>
        <div className="flex flex-col gap-gapLargest lg:gap-gapUltra">
          <div className="flex flex-col items-center gap-gapSmall">
            <SectionHeader
              mainText="Testimonials"
              subText="What Our Clients Say"
            />
            <p className="text-fontDesk">
              Trusted by Over 1200+ Clients Worldwide
            </p>
          </div>

          <div className="testimonials-slider">
            <Slider
              ref={(sliderInstance) => setSlider(sliderInstance)}
              {...settings}
            >
              {testimonials.data.map((item, index) => (
                <TestimonialsCard
                  testimonial={item}
                  key={index}
                  isActive={index === activeSlide}
                  sliderRef={slider}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Testimonials;

//---------------------EXTRA CODE--------------------------
// import testimonialImg from "@/images/testimonials.png";
// const testimonialsDummy = [
//   {
//     img: testimonialImg,
//     content:
//       "Working with Rechelist Pharma has been a game-changer for our business. Their product quality, timely delivery, and transparent communication truly set them apart. We've grown rapidly ever since partnering with them for third-party manufacturing",
//     author: "Rahul Sharma",
//     company: "Medglow Biotech",
//   },
//   {
//     img: testimonialImg,
//     content:
//       "Their service is reliable, efficient, and the team is highly supportive. We’ve been able to expand our offerings quickly with their help.",
//     author: "Priya Singh",
//     company: "HealthCorp",
//   },
//   {
//     img: testimonialImg,
//     content:
//       "High-quality production standards and professional support – truly a partner we trust.",
//     author: "Amit Verma",
//     company: "LifeCare Labs",
//   },
//   {
//     img: testimonialImg,
//     content:
//       "Their service is reliable, efficient, and the team is highly supportive. We’ve been able to expand our offerings quickly.",
//     author: "Raman Singh",
//     company: "HealthCorp",
//   },
// ];
