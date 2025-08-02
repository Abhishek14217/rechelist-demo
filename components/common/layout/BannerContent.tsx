import Button from "@/components/ui/Button";

const BannerContent = () => {
  return (
    <div className="absolute top-[2.5rem] md:top-[5rem] lg:top-[9.5rem] left-1/2 transform -translate-x-1/2">
      <h6 className="text-white text-fontDesk md:text-fontDeskLargest lg:text-fontDeskUltra font-extrabold text-center">
        Welcome To
      </h6>
      <h1 className="text-stroke-white text-fontDeskLargest md:text-[2.5rem] lg:text-[4.5rem] font-extrabold text-center">
        Rechelist Pharma
      </h1>
      <p className="text-white text-fontDeskLarge font-normal text-center hidden md:block">
        Join hands with Rechelist Pharma – a trusted name in PCD Pharma
        Franchise. We deliver high-quality, affordable medicines backed by
        certifications and timely support to help your business grow.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-gap justify-center mt-gapLarge">
        <Button
          type="link"
          href="products"
          text="View Products"
          className="bg-white text-primaryBlue px-4 md:px-6 py-2 rounded-full text-fontDesk md:text-fontDeskLarge"
        />
        <Button
          type="button"
          text="Send Enquiry"
          className="bg-primaryBlue text-white px-4 md:px-6 py-2 rounded-full text-fontDesk md:text-fontDeskLarge"
        />
      </div>
    </div>
  );
};

export default BannerContent;
