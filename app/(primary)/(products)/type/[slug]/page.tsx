import ProductsListingLayout from "@/components/common/layout/ProductsListingLayout";

type Params = Promise<{ slug: string }>;

const ProductTypes = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  return <ProductsListingLayout slug={slug} pageType="type" />;
};

export default ProductTypes;
