import Image from "next/image";
import Link from "next/link";

import Wrapper from "@/components/ui/Wrapper";
import CustomInput from "@/components/ui/Input";

import mainLogo from "@/images/logo.svg";
import mailBtn from "@/icons/newsletter-btn.svg";
import locationIcon from "@/icons/location-icon.svg";
import mailIcon from "@/icons/mail-icon.svg";
import phoneIcon from "@/icons/phone-icon.svg";
import fbIcon from "@/icons/fb-icon.svg";
import linkedinIcon from "@/icons/linkedin-icon.svg";
import xIcon from "@/icons/x-icon.svg";

const footerDummyData = [
  {
    title: "Quick Links",
    content: [
      { title: "About Us", slug: "about-us" },
      { title: "Products", slug: "products" },
      { title: "Services", slug: "services" },
      { title: "Blog", slug: "blog" },
      { title: "Contact Us", slug: "contact-us" },
    ],
  },
  {
    title: "Resource",
    content: [
      { title: "Privacy Policy", slug: "privacy-policy" },
      { title: "Terms and Conditions", slug: "terms-and-conditions" },
      { title: "FAQ", slug: "faq" },
      { title: "How We Work", slug: "how-we-work" },
    ],
  },
];

const contactUsData = [
  {
    img: locationIcon,
    content: (
      <>
        Office 18, Paras Down Square Mall,
        <br />
        Zirakpur, Punjab, 140603
      </>
    ),
  },
  {
    img: mailIcon,
    content: "rechelist@gmail.com",
  },
  {
    img: phoneIcon,
    content: "+91-8288037775",
  },
];

const socialIcons = [
  { img: fbIcon, slug: "#" },
  { img: linkedinIcon, slug: "#" },
  { img: xIcon, slug: "#" },
];

const Footer = () => {
  return (
    <div className="mt-sectionGap bg-grayNeutral py-gapUltra">
      <Wrapper>
        <div className="flex flex-col gap-gapLargest">
          <div className="flex flex-col gap-gapUltra border-b border-gray-300 pb-gapUltra lg:grid lg:grid-cols-[1fr_1fr] lg:gap-[5rem] items-center">
            <div className="flex flex-col gap-gap">
              <Link href="/" className="w-fit">
                <Image
                  src={mainLogo}
                  alt="logo-header-desk"
                  height={70}
                  width={140}
                  unoptimized
                  className="w-[8.75rem] h-[4.375rem]"
                />
              </Link>
              <p className="text-fontDesk">
                Rechelist Pharma, the nutraceutical manufacturing division of
                Biotech, offers a full-spectrum contract manufacturing service
                that blends science with market-ready innovation.
              </p>
            </div>
            <div className="flex flex-col gap-gapSmall lg:gap-gap w-full lg:w-3/4">
              <h6 className="text-fontDeskLargest font-semibold">Newsletter</h6>
              <div className="relative">
                <CustomInput
                  type="text"
                  placeholder="Your Email Address"
                  name="email"
                  className="w-full rounded-full bg-white px-4 py-3 pr-12 text-fontDesk shadow-sm outline-none"
                />
                <button className="absolute top-1/2 right-2 -translate-y-1/2">
                  <Image
                    src={mailBtn}
                    alt="newsletter-button"
                    width={32}
                    height={32}
                    unoptimized
                    className="size-[2rem]"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-gapUltra border-b border-gray-300 pb-gapUltra">
            <div className=" flex flex-col md:flex-row gap-gapUltra md:gap-0 justify-between">
              <div className="flex flex-col gap-gapMed lg:gap-gap">
                <h6 className="text-fontDeskLargest font-semibold">
                  Contact Us
                </h6>
                <div className="flex flex-col gap-gap">
                  {contactUsData.map((item, index) => (
                    <div key={index} className="flex gap-gapMed items-center">
                      <Image
                        src={item.img}
                        alt={`contact-icon-${index}`}
                        width={20}
                        height={20}
                        unoptimized
                        className="size-[1.25rem]"
                      />
                      <span className="text-fontDesk">{item.content}</span>
                    </div>
                  ))}
                </div>
              </div>

              {footerDummyData.map((link, linkIndex) => (
                <div className="flex flex-col gap-gap" key={linkIndex}>
                  <h6 className="text-fontDeskLargest font-semibold">
                    {link.title}
                  </h6>
                  <div className="flex flex-col gap-gap">
                    {link.content.map((item, index) => (
                      <Link
                        href={item.slug}
                        key={index}
                        className="text-fontDesk hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primaryOrange hover:to-secondaryYellow transition-colors duration-300"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-gapUltra items-center">
              {socialIcons.map((social, socialIndex) => (
                <Link
                  href={social.slug}
                  key={socialIndex}
                  className="transition-transform duration-300 hover:scale-125"
                >
                  <Image
                    src={social.img}
                    alt={`social-icon-${socialIndex}`}
                    width={20}
                    height={20}
                    unoptimized
                    className="size-[1.25rem]"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center text-fontDesk text-gray-600">
            Copyright © {new Date().getFullYear()} All Rights Reserved |{" "}
            <span className="font-semibold text-gray-800">
              Rechelist Pharma
            </span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;

//EXTRA
{
  /* <div className="flex gap-gapUltra items-center">
                {socialIcons.map((social, socialIndex) => (
                  <Link
                    href={social.slug}
                    key={socialIndex}
                    className="transition-transform duration-300 hover:scale-125"
                  >
                    <Image
                      src={social.img}
                      alt={`social-icon-${socialIndex}`}
                      width={20}
                      height={20}
                      unoptimized
                      className="size-[1.25rem]"
                    />
                  </Link>
                ))}
              </div> */
}
