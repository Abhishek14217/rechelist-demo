import Image from "next/image";

import Wrapper from "@/components/ui/Wrapper";
import SectionHeader from "@/components/ui/SectionHeader";

import blogsOne from "@/images/blogs-home-one.png";
import blogsTwo from "@/images/blogs-home-two.png";
import blogsThree from "@/images/blogs-home-three.png";
import Button from "@/components/ui/Button";

const blogsDummyData = [
  {
    image: blogsOne,
    date: "March 31, 2025",
    title: "Reliable Contract Manufacturing for Skin Care",
    content:
      "Reliable Contract Manufacturing for Skin Care Contract Manufacturing for Skin Care",
    url: "#",
  },
  {
    image: blogsTwo,
    date: "April 31, 2025",
    title: "Reliable Contract Manufacturing for Skin",
    content:
      "Reliable Contract Manufacturing for Skin Care Contract Manufacturing for Skin",
    url: "#",
  },
  {
    image: blogsThree,
    date: "June 31, 2025",
    title: "Reliable Contract Manufacturing for Skin Care",
    content:
      "Reliable Contract Manufacturing for Skin Care Contract Manufacturing for Skin Care",
    url: "#",
  },
  {
    image: blogsThree,
    date: "June 31, 2025",
    title: "Reliable Contract Manufacturing for Skin Care",
    content:
      "Reliable Contract Manufacturing for Skin Care Contract Manufacturing for Skin Care",
    url: "#",
  },
];

const BlogsHome = () => {
  return (
    <div className="mt-sectionGap">
      <Wrapper>
        <div className="flex flex-col gap-gapLargest lg:gap-gapUltra">
          <SectionHeader
            mainText="Recent Blogs"
            subText="Explore Insights & Updates"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gapLarge">
            {blogsDummyData.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-[0_3px_10px_rgba(0,123,255,0.15)] overflow-hidden flex flex-col hover:shadow-[0_3px_20px_rgba(0,123,255,0.25)] transition-shadow"
              >
                {/* Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-gapLarge p-5">
                  <div className="flex flex-col flex-grow gap-gapSmall">
                    <p className="text-sm text-grayCustom2">{blog.date}</p>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-grayCustom1 line-clamp-3">
                      {blog.content}
                    </p>
                  </div>
                  <Button
                    type="link"
                    href={blog.url}
                    text="Read More"
                    className="w-fit text-white text-fontDesk px-4 py-2 rounded-full transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow hover:opacity-90"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogsHome;
