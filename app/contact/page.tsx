import ContactForm from "@/components/common/forms/ContactForm";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";

export default function ContactUsPage() {
  return (
    <div className="mt-0 lg:mt-gapLargest flex flex-col gap-[3rem] lg:gap-[5rem]">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-primaryOrange to-secondaryYellow py-7 md:py-9 lg:py-12 text-center">
        <Breadcrumb title="Contact Us" subtitle="We’d love to hear from you" />
      </section>

      {/* Office Info Section */}
      <Wrapper>
        <div className="flex flex-col gap-[3rem] lg:gap-[5rem]">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl shadow-custom bg-white">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow mb-2">
                Registered Office
              </h3>
              <p className="text-gray-600">
                SCO 215, Top Floor, Sector 14 Panchkula, Haryana – 134113
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-custom bg-white">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow mb-2">
                Admin Office
              </h3>
              <p className="text-gray-600">
                Plot 19, IT Park, Chandigarh – 160101
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-custom bg-white">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow mb-2">
                Contact Info
              </h3>
              <p className="text-gray-600">+91 9876543210</p>
              <p className="text-gray-600">info@rechelistpharma.com</p>
            </div>
          </section>

          {/* Map + Form */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="w-full h-[25rem] md:h-full rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=Office%2020%2C%20Paras%20down%20square%20Mall%2C%20Zirakpur%2C%20Punjab%20140603&t=m&z=10&output=embed&iwloc=near"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
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
