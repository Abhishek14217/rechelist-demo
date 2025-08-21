import PolicySection from "@/components/common/layout/policy/PolicySection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";

interface PolicyData {
  title: string;
  content: string;
}

const mockPolicyData: PolicyData[] = [
  {
    title: "Information We Collect",
    content: `
We may collect the following types of personal and non-personal information:
<ul>
<li><b>Personal Information:</b> Name, email address, phone number you provide when interacting with our Executives.</li>
<li><b>Health Information:</b> Information related to medical conditions, prescriptions, and healthcare preferences, as required for pharmaceutical products.</li>
<li><b>Payment Information:</b> Billing details, credit/debit card information, and transaction records when purchasing products.</li>
</ul>

    `,
  },
  {
    title: "How We Use Your Information",
    content: `
We use the collected information for the following purposes:
<ul>
<li>To provide, manage, and improve our pharmaceutical products and services.</li>
<li>To process transactions, including billing and order fulfilment.</li>
<li>To send updates, promotional offers, and important product-related notifications.</li>
<li>To enhance user experience and analyse website performance.</li>
</ul>

    `,
  },
  {
    title: "Sharing of Information",
    content: `
We do not sell or rent your personal data. However, we may share your information in the following scenarios:

<ul>
<li><b>With Service Providers:</b> Third-party vendors who assist in payment processing, shipping, marketing, or IT support.</li>
<li><b>For Legal Reasons:</b> When required by law, regulation, or government requests, or to protect our legal rights.</li>
</ul>
    `,
  },
  {
    title: "Data Security",
    content: `
We take reasonable security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
    `,
  },
  {
    title: "Your Rights & Choices",
    content: `
You have the following rights regarding your personal information:

<ul>
<li><b>Access & Correction:</b> Request access to or correction of your personal data.</li>
<li><b>Opt-Out:</b> Unsubscribe from marketing communications.</li>
<li><b>Data Deletion:</b> Request deletion of your personal information, subject to legal and contractual obligations.</li>
<li><b>Cookies Management:</b> Adjust your browser settings to manage cookies and tracking preferences.</li>
</ul>
    `,
  },
  {
    title: "Third-Party Links",
    content: `
Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies before providing any information.
    `,
  },
  {
    title: "Updates to This Policy",
    content: `
We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated effective date.
    `,
  },
  {
    title: "Contact Us",
    content: `
For questions or concerns regarding this Privacy Policy, contact us at:  
<a href="/" class="text-primaryBlue underline">RechElist Pharma Pvt Ltd</a> <br/>
📧 rechelist@gmail.com  <br/>
📞 <b>8288037775</b>
    `,
  },
];

export default function PrivacyPage() {
  return (
    <div className="mt-0 lg:mt-gapLargest flex flex-col gap-[2rem] lg:gap-[4rem]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-primaryOrange to-secondaryYellow py-7 md:py-9 lg:py-12 text-center">
        <Wrapper>
          <Breadcrumb
            title="Privacy Policy"
            subtitle="Your Data, Our Commitment"
          />
        </Wrapper>
      </section>

      {/* Intro Description */}
      <Wrapper>
        <PolicySection description="RechElist Pharma Pvt Ltd is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you interact with our website or purchase our pharmaceutical products. By accessing or using our services, you agree to the terms outlined in this Privacy Policy." />

        {/* Content Sections */}
        <div className="flex flex-col gap-6 privacy-content">
          {mockPolicyData.map((section, idx) => (
            <PolicySection
              key={idx}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
