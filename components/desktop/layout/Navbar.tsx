"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "@/components/ui/Wrapper";
import Button from "@/components/ui/Button";
import OffCanvas from "@/components/ui/OffCanvas";
import NavMob from "@/components/mobile/layout/NavMob";

import mainLogo from "@/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const navData = [
  { title: "About Us", path: "about-us" },
  { title: "Career", path: "career" },
  { title: "Services", path: "services" },
  { title: "Products", path: "products" },
  { title: "Categories", path: "categories" },
  { title: "Product Range", path: "product-range" },
  { title: "Post Your Requirement", path: "post-requirement" },
];

const Navbar = () => {
  const [sideBarOffCanvasOpen, setSideBarOffCanvasOpen] = useState(false);

  //--------------------TOGGLE SIDEBAR OFF-CANVAS----------------------
  const toggleSideBarOffCanvas = () => {
    setSideBarOffCanvasOpen((prevState) => !prevState);
  };

  return (
    <>
      {/*--------------------- MOBILE NAVBAR --------------------------------*/}
      <div className="block lg:hidden bg-white top-[-0.5px] left-0 w-full z-[99] sticky py-gapSmall shadow-md">
        <OffCanvas
          close={toggleSideBarOffCanvas}
          offcanvas={sideBarOffCanvasOpen}
          className="left-0 -translate-x-full max-w-[75%] w-[26.875rem] overflow-scroll"
        >
          <NavMob close={toggleSideBarOffCanvas} navData={navData} />
        </OffCanvas>
        <Wrapper>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-gap">
              <button onClick={toggleSideBarOffCanvas}>
                <GiHamburgerMenu size={20} />
              </button>
              <Link href="/">
                <Image
                  src={mainLogo}
                  alt="logo-header-mob"
                  height={64}
                  width={96}
                  unoptimized
                  className="w-[6rem] h-[4rem] md:w-[7rem]"
                />
              </Link>
            </div>
            <Button
              type="link"
              text={"Contact Us"}
              href="contact-us"
              className="px-4 lg:px-6 py-2 text-fontDesk lg:text-fontDeskLarge rounded-full text-white transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow hover:opacity-90"
            />
          </div>
        </Wrapper>
      </div>

      {/*--------------------- DESKTOP NAVBAR ---------------------*/}
      <nav className="mt-gap relative z-10 hidden lg:block">
        <Wrapper>
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={mainLogo}
                alt="logo-header-desk"
                height={80}
                width={160}
                unoptimized
                className="w-[10rem] h-[5rem]"
              />
            </Link>

            <ul className="relative flex items-center gap-gapLargest">
              {navData.map((item, index) => (
                <li
                  key={index}
                  className="relative text-fontDeskLarge flex items-center"
                >
                  <Link className="text-black" href={`/${item.path}`}>
                    {item.title}
                  </Link>
                </li>
              ))}

              <li>
                <Button type="link" text={"Contact Us"} href="contact-us" />
              </li>
            </ul>
          </div>
        </Wrapper>
      </nav>
    </>
  );
};

export default Navbar;
