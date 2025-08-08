import Image from "next/image";

import Button from "@/components/ui/Button";
import { Product } from "@/types/products";

type FeaturedProductsCardProps = {
  product: Product;
};

const FeaturedProductsCard: React.FC<FeaturedProductsCardProps> = ({
  product,
}) => {
  return (
    <div className="mx-gapSmall flex flex-col gap-gap">
      {/* Product Image */}
      <div className="relative rounded-2xl overflow-hidden w-[11.5rem] md:w-[13rem] lg:w-full h-[11.5rem] md:h-[13rem] lg:h-[18.438rem]">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${product.image}`}
          alt={product.title}
          fill
          className="object-contain md:object-fill"
        />
      </div>

      {/* Product Type Badge */}
      <span className="w-fit bg-white rounded-full text-black text-sm font-medium px-3 py-1 border border-orange-400 capitalize">
        {product.type}
      </span>

      {/* Product Details */}
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-fontDeskLarge lg:text-xl font-semibold">
          {product.title}
        </h3>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow text-sm font-medium">
          {product.combination}
        </p>
        <p className="text-gray-300 text-sm">{`${product.pack}`}</p>
      </div>

      {/* Send Enquiry Button */}
      <Button
        type="button"
        text="Send Enquiry"
        className="w-fit text-white px-4 lg:px-6 py-2 text-fontDesk lg:text-fontDeskLarge rounded-full transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow hover:opacity-90"
      />
    </div>
  );
};

export default FeaturedProductsCard;
