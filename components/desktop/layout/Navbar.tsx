import Link from "next/link";
import Image from "next/image";

import Wrapper from "@/components/ui/Wrapper";
import Button from "@/components/ui/Button";

import mainLogo from "@/images/logo.svg";

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
  return (
    <nav className="mt-gap relative z-10">
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
              <Button type="link" text = {"Contact Us"} href="contact-us"/>
            </li>
          </ul>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
