"use client";

import Button from "@/components/ui/Button";
import { useModal } from "@/hooks/useModalContext";

const BannerEnquiry = () => {
  const { toggleModal } = useModal();

  return (
    <Button
      type="button"
      text="Send Enquiry"
      className="bg-primaryBlue text-white px-4 md:px-6 py-2 rounded-full text-fontDesk md:text-fontDeskLarge"
      onClick={toggleModal}
    />
  );
};

export default BannerEnquiry;
