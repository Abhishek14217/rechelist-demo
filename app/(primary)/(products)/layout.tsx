import CategoriesSidebar from "@/components/common/layout/CategoriesSidebar";
import RangeBar from "@/components/common/layout/RangeBar";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";

export default async function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Breadcrumb + Banner */}
      <section className="bg-gradient-to-r from-primaryOrange to-secondaryYellow py-[4rem] mt-sectionGap text-center">
        <Breadcrumb
          title="Products"
          subtitle="Explore our wide product range"
        />
      </section>

      <Wrapper>
        <div className="mx-auto mt-sectionGap flex flex-col lg:grid lg:grid-cols-[0.35fr_1fr] gap-8 lg:gap-12">
          <CategoriesSidebar />
          <main className="flex-1">
            <RangeBar />
            {children}
          </main>
        </div>
      </Wrapper>
    </>
  );
}
