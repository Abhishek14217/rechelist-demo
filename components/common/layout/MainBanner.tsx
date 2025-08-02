import Image from "next/image";

import mainBanner from "@/images/main-banner.png";

const MainBanner = () => {
  return (
    <div className="h-[17rem] md:h-[30rem] lg:h-[50rem] relative">
      <Image src={mainBanner} alt={"main-banner"} fill priority />
    </div>
  );
};

export default MainBanner;
