import Footer from "@/components/common/layout/Footer";
import Navbar from "@/components/desktop/layout/Navbar";
import { getNavItems } from "@/apis/get-nav-items";
import { getLogoAndDesc } from "@/apis/get-static-data";

export default async function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //------PARALLEL DATA FETCHING FOR CRITICAL ELEMENTS--------------------
  const [navItems, logoAndDesc] = await Promise.all([
    getNavItems(),
    getLogoAndDesc(),
  ]);

  return (
    <div className="primary-layout flex min-h-screen flex-col">
      <Navbar navData={navItems.menus[0]} logo={logoAndDesc.logo} />
      <div className="flex-1">{children}</div>
      <Footer
        socialLinks={navItems.menus[1]}
        quickLinks={navItems.menus[2]}
        resourceLinks={navItems.menus[3]}
        contactInfo={navItems.contact}
        logo={logoAndDesc.logo}
        description={logoAndDesc.logo_description}
      />
    </div>
  );
}
