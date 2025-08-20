import Image from "next/image";
import { useState } from "react";

import Button from "@/components/ui/Button";
import { Product } from "@/types/products";
import Modal from "@/components/ui/Modal";
import ProductEnquiryForm from "../../forms/ProductEnquiryForm";

import productDummyImg from "@/images/product-range-three.png";
import { RxCross2 } from "react-icons/rx";

type ProductCardProps = Product;

export default function ProductCard({
  title,
  combination,
  pack,
  mrp,
  image,
  type,
}: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const imageSrc = image
    ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${image}`
    : productDummyImg;

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-[0px_0px_4px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_6px_rgba(0,0,0,0.15)] transition flex flex-col">
        {/* Image */}
        <div className="w-full h-48 md:h-56 relative">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 300px"
            className="object-cover rounded-t-2xl"
          />
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 flex flex-col gap-2 md:gap-3">
          {/* Badge */}
          <span className="bg-gray-100 text-gray-700 text-xs md:text-fontDesk lg:text-xs font-medium px-2 py-0.5 rounded-full w-fit capitalize">
            {type}
          </span>

          {/* Title */}
          <h4 className="text-fontDeskLarge md:text-lg font-semibold text-gray-900 leading-snug">
            {title}
          </h4>

          {/* Composition */}
          <p
            className="text-xs md:text-sm text-gray-600 lg:line-clamp-2"
            title={combination ?? undefined}
          >
            {combination}
          </p>

          {/* Packaging */}
          <p className="text-xs md:text-sm text-gray-500">{pack}</p>

          {/* Price */}
          <p className="text-sm md:text-base font-semibold text-primaryOrange">
            ₹ {mrp}
          </p>

          {/* CTA */}
          <div className="mt-2">
            <Button
              type="button"
              text="Send Enquiry"
              className="w-full md:w-auto px-4 py-2 text-sm rounded-full text-white transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow hover:opacity-90"
              onClick={toggleModal}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          className="bg-white rounded-2xl shadow-lg relative w-[85%] lg:w-[38%] left-[7%] lg:left-[35%] top-[5vh] lg:top-[15vh] px-6 py-8 overflow-auto max-h-[90vh]"
          close={toggleModal}
        >
          {/* Close Icon */}
          <button
            onClick={toggleModal}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            <RxCross2 size={24} />
          </button>

          <ProductEnquiryForm productTitle={title} />
        </Modal>
      )}
    </>
  );
}
