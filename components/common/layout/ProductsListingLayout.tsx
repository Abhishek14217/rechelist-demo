import { Suspense } from "react";

import Wrapper from "@/components/ui/Wrapper";
import ProductsBannerSection from "@/components/common/layout/ProductsBannerSection";
import SidebarSection from "@/components/common/layout/categories-sidebar/CategoriesSidebarSection";
import RangeBarSection from "@/components/common/layout/range-bar/RangeBarSection";
import ProductsSection from "@/components/common/layout/products-section/ProductsSection";
import BannerSkeleton from "@/components/common/skeletons/BannerSkeleton";
import SidebarSkeleton from "@/components/common/skeletons/SidebarSkeleton";
import RangeBarSkeleton from "@/components/common/skeletons/RangeBarSkeleton";
import ProductsGridSkeleton from "@/components/common/skeletons/ProductsGridSkeleton";

type ProductsListingLayoutProps = {
  slug?: string;
  pageType: "category" | "type" | "allProducts";
};

const ProductsListingLayout: React.FC<ProductsListingLayoutProps> = ({
  slug,
  pageType,
}) => {
  return (
    <div className="mt-sectionGap">
      {/* Banner */}
      <Suspense fallback={<BannerSkeleton />}>
        <ProductsBannerSection slug={slug} pageType={pageType} />
      </Suspense>
      <Wrapper>
        <div className="mx-auto mt-sectionGap flex flex-col lg:grid lg:grid-cols-[0.35fr_1fr] gap-8 lg:gap-12">
          {/* Sidebar */}
          <Suspense fallback={<SidebarSkeleton />}>
            <SidebarSection />
          </Suspense>

          {/* Main Content */}
          <main className="flex-1">
            <Suspense fallback={<RangeBarSkeleton />}>
              <RangeBarSection />
            </Suspense>

            <Suspense fallback={<ProductsGridSkeleton count={9} />}>
              <ProductsSection slug={slug} pageType={pageType} />
            </Suspense>
          </main>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductsListingLayout;
