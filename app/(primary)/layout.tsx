import Footer from "@/components/common/layout/Footer";
import Navbar from "@/components/desktop/layout/Navbar";
import {
  getLogoAndDesc,
  getNavItems,
  getCategories,
  getRange,
} from "@/apis/get-apis";

export default async function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //------PARALLEL DATA FETCHING FOR CRITICAL ELEMENTS--------------------
  const [navItems, logoAndDesc, categoryItems, productsRange] =
    await Promise.all([
      getNavItems(),
      getLogoAndDesc(),
      getCategories(),
      getRange(),
    ]);

  return (
    <div className="primary-layout flex min-h-screen flex-col">
      <Navbar
        navData={navItems.menus[0]}
        logo={logoAndDesc.logo}
        categories={categoryItems}
        range={productsRange}
      />
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
