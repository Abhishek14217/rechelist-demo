import ProductsListingLayout from "@/components/common/layout/ProductsListingLayout";

type Params = Promise<{ slug: string }>;

export default async function ProductCategoriesPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  return (
    <ProductsListingLayout slug={slug} pageType="category" />
  );
}
