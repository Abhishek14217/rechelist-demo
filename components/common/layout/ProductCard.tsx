import Image from "next/image";
import Button from "@/components/ui/Button";

type ProductCardProps = {
  id: number;
  title: string;
  image: string;
  category: string; // Tablet, Capsule, etc.
  composition: string;
  packaging: string;
  price: string;
};

export default function ProductCard({
  title,
  image,
  category,
  composition,
  packaging,
  price,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0px_0px_4px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_4px_rgba(0,0,0,0.2)] transition flex flex-col">
      {/* Image */}
      <div className="w-full h-52 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Badge */}
        <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full w-fit">
          {category}
        </span>

        {/* Title */}
        <h4 className="text-base lg:text-lg font-semibold text-gray-900">
          {title}
        </h4>

        {/* Composition */}
        <p className="text-sm text-gray-600">{composition}</p>

        {/* Packaging */}
        <p className="text-sm text-gray-500">{packaging}</p>

        {/* Price */}
        <p className="text-sm font-semibold text-primaryOrange">{price}</p>

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
