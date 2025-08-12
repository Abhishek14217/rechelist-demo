import Image from "next/image";

import Button from "@/components/ui/Button";
import { Product } from "@/types/products";

type ProductCardProps = Product;

export default function ProductCard({
  id,
  title,
  combination,
  pack,
  mrp,
  image,
  type,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0px_0px_4px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_4px_rgba(0,0,0,0.2)] transition flex flex-col">
      {/* Image */}
      <div className="w-full h-[15rem] relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${image}`}
          alt={title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Badge */}
        <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full w-fit capitalize">
          {type}
        </span>

        {/* Title */}
        <h4 className="text-base lg:text-lg font-semibold text-gray-900">
          {title}
        </h4>

        {/* Composition */}
        <p className="text-sm text-gray-600">{combination}</p>

        {/* Packaging */}
        <p className="text-sm text-gray-500">{pack}</p>

        {/* Price */}
        <p className="text-sm font-semibold text-primaryOrange">{mrp}</p>

        {/* CTA */}
        <div className="mt-2">
          <Button
            type="button"
            text="Send Enquiry"
            className="px-4 py-2 text-sm rounded-full text-white transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow hover:opacity-90"
          />
        </div>
      </div>
    </div>
  );
}
