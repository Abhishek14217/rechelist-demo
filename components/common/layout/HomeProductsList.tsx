import Image from "next/image";

import SectionHeader from "@/components/ui/SectionHeader";
import Wrapper from "@/components/ui/Wrapper";
import Button from "@/components/ui/Button";

import productImgOne from "@/images/product-range-one.png";
import productImgTwo from "@/images/product-range-two.png";
import productImgThree from "@/images/product-range-three.png";
import productImgFour from "@/images/product-range-four.png";

const homeProductsData = [
  {
    img: productImgOne,
    type: "Tablet",
    name: "Product Name",
    salt: "Amoxycillin/Paracetamol",
    qty: "10x10",
  },
  {
    img: productImgTwo,
    type: "Tablet",
    name: "Product Name",
    salt: "Amoxycillin/Paracetamol",
    qty: "10x10",
  },
  {
    img: productImgThree,
    type: "Tablet",
    name: "Product Name",
    salt: "Amoxycillin/Paracetamol",
    qty: "10x10",
  },
  {
    img: productImgFour,
    type: "Tablet",
    name: "Product Name",
    salt: "Amoxycillin/Paracetamol",
    qty: "10x10",
  },
];

const HomeProductsList = () => {
  return (
    <div className="mt-gapUltra lg:mt-sectionGap bg-black py-gapUltra">
      <Wrapper>
        <div className="flex flex-col gap-gapUltra">
          <SectionHeader
            mainText="Portfolio"
            subText="Our Products"
            subTextClass="text-white text-fontDeskLargest lg:text-fontDeskUltra"
          />
          {/* Products Grid */}
          <div className="flex overflow-x-scroll no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 gap-gapUltra">
            {homeProductsData.map((product, index) => (
              <div key={index} className="flex flex-col gap-gap">
                {/* Product Image */}
                <div className="relative rounded-2xl overflow-hidden w-full h-[11.5rem] lg:h-[18.438rem]">
                  <Image src={product.img} alt={product.name} fill className="object-contain lg:object-fill" />
                </div>

                {/* Product Type Badge */}
                <span className="w-fit bg-white rounded-full text-black text-sm font-medium px-3 py-1 border border-orange-400">
                  {product.type}
                </span>

                {/* Product Details */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-fontDeskLarge lg:text-xl font-semibold">
                    {product.name}
                  </h3>
                  <p className="bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow text-sm font-medium">
                    {product.salt}
                  </p>
                  <p className="text-gray-300 text-sm">{`${product.qty} Tablets Stripe`}</p>
                </div>

                {/* Send Enquiry Button */}
                <Button
                  type="button"
                  text="Send Enquiry"
                  className="w-fit text-white px-4 lg:px-6 py-2 text-fontDesk lg:text-fontDeskLarge rounded-full transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow hover:opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HomeProductsList;
