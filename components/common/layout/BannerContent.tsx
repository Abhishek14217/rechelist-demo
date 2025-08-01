import Button from "@/components/ui/Button";

const BannerContent = () => {
  return (
    <div className="absolute top-[9.5rem] sm:left-1/2 sm:transform sm:-translate-x-1/2">
      <h6 className="text-white text-fontDeskSmall lg:text-fontDeskUltra font-extrabold text-center">
        Welcome To
      </h6>
      <h1 className="text-stroke-white text-fontDeskSmall lg:text-[4.5rem] font-extrabold text-center">
        Rechelist Pharma
      </h1>
      <p className="text-white text-fontDeskLarge font-normal text-center">
        Join hands with Rechelist Pharma – a trusted name in PCD Pharma
        Franchise. We deliver high-quality, affordable medicines backed by
        certifications and timely support to help your business grow.
      </p>
      <div className="flex items-center gap-gap justify-center mt-gapLarge">
        <Button
          type="link"
          href="products"
          text="View Products"
          className="bg-white text-primaryBlue px-6 py-2 rounded-full"
        />
        <Button
          type="button"
          text="Send Enquiry"
          className="bg-primaryBlue text-white px-6 py-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default BannerContent;
