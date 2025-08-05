import Link from "next/link";
import React from "react";

type ButtonProps = {
  className?: string;
  type?: "button" | "link";
  text: string;
  href?: string;
  target?: string;
};

const Button: React.FC<ButtonProps> = ({
  className = "px-4 lg:px-6 py-2 text-fontDesk lg:text-fontDeskLarge rounded-full text-black transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow hover:opacity-90",
  type = "button",
  text,
  href = "#",
  target,
}) => {
  if (type === "link") {
    return (
      <Link href={href} className={className} target={target}>
        {text}
      </Link>
    );
  }

  return <button className={className}>{text}</button>;
};

export default Button;
