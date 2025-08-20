import Image from "next/image";

type ServiceSectionProps = {
  title: string;
  image: any;
  reverse?: boolean;
};

const ServiceSection = ({ title, image, reverse }: ServiceSectionProps) => {
  return (
    <section
      className={`flex flex-col lg:flex-row gap-gapLarge lg:gap-[3rem] items-center ${
        reverse ? "flex-col-reverse lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-[18rem] lg:h-[25rem] w-full lg:w-[55%]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl shadow-md"
        />
      </div>

      {/* Content */}
      <div className="text-left lg:w-full">
        <h3 className="mb-2 lg:mb-4 text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          At Rechelist Pharma, we offer reliable and high-quality Third Party
          Manufacturing services to support pharma businesses looking to expand
          without investing in costly infrastructure. With our WHO–GMP certified
          manufacturing units, modern technology, and stringent quality
          controls, we deliver consistent and timely pharmaceutical production
          across a wide range of formulations.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We handle everything from formulation development to packaging and
          delivery, ensuring full compliance with industry standards and
          regulatory norms. Our transparent process, dedicated support, and
          flexible production capacities make us a trusted partner for both
          startups and established brands.
        </p>

        <div className="text-gray-700 leading-relaxed">
          <h4 className="font-semibold text-lg mb-2">What We Offer:</h4>
          <ul className="list-disc pl-5 space-y-1 text-left">
            <li>WHO–GMP certified facilities</li>
            <li>DCGI–approved product range</li>
            <li>Custom branding & packaging support</li>
            <li>Timely delivery with full documentation</li>
            <li>Strict quality assurance & batch testing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
