import { getContactData } from "@/apis/get-apis";
import ContactForm from "@/components/common/forms/ContactForm";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { getAbsoluteUrl } from "@/utils/helper";

export const generateMetadata = async () => {
  const defaultSeo = {
    seo_title: "Contact Us | Rechelist Pharma",
    seo_description:
      "Get in touch with Rechelist Pharma for PCD Pharma Franchise opportunities, partnerships, and product inquiries. Reach us at our offices or send us a message online.",
  };

  const pageUrl = getAbsoluteUrl("/contact");

  return generateSeoMetadata(defaultSeo, pageUrl, "article");
};

export default async function ContactUsPage() {
  const { data: contactData } = await getContactData();

  const cardClasses = "p-6 rounded-2xl shadow-custom bg-white";

  return (
    <div className="mt-0 lg:mt-gapLargest flex flex-col gap-[3rem] lg:gap-[5rem]">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-primaryOrange to-secondaryYellow py-7 md:py-9 lg:py-12 text-center">
        <Breadcrumb title="Contact Us" subtitle="We’d love to hear from you" />
      </section>

      {/* Office Info Section */}
      <Wrapper>
        <div className="flex flex-col gap-[3rem] lg:gap-[5rem]">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 contact-design">
            {/* Registered Office */}
            <div
              className={cardClasses}
              dangerouslySetInnerHTML={{
                __html: contactData.registered_office,
              }}
            />

            {/* Admin Office */}
            <div
              className={cardClasses}
              dangerouslySetInnerHTML={{ __html: contactData.admin_office }}
            />

            {/* Contact Info */}
            <div
              className={cardClasses}
              dangerouslySetInnerHTML={{ __html: contactData.contact_info }}
            />
          </section>

          {/* Map + Form */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="w-full h-[25rem] md:h-full rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5190777061343!2d76.8014314!3d30.703804599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f932e5e510bd1%3A0xb9ebbeeb0bd5b35c!2sRech%20Elist%20Pharma%20(%20Division%20Of%20Biophar%20Lifesciences%20Pvt.%20Ltd.)!5e0!3m2!1sen!2sin!4v1755852981927!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </section>
        </div>
      </Wrapper>
    </div>
  );
}
