import Image from "next/image";

type MainBannerProps = {
  bannerImg: string;
};

const MainBanner: React.FC<MainBannerProps> = ({ bannerImg }) => {
  return (
    <div className="h-[17.5rem] md:h-[35rem] lg:h-[50rem] relative">
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${bannerImg}`}
        alt={"main-banner"}
        fill
        priority
      />
    </div>
  );
};

export default MainBanner;

//-------------------EXTRA CODE-------------------
// import mainBanner from "@/images/main-banner.png";
