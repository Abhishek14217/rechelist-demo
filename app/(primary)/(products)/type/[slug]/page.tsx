import { getTypeWiseProducts } from "@/apis/get-apis";
import ProductsListingLayout from "@/components/common/layout/ProductsListingLayout";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { getAbsoluteUrl } from "@/utils/helper";

type Params = Promise<{ slug: string }>;

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const pageData = await getTypeWiseProducts(slug);
  const pageUrl = getAbsoluteUrl(`/type/${slug}`);

  return generateSeoMetadata(pageData.type, pageUrl, "article");
};

const ProductTypes = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  return <ProductsListingLayout slug={slug} pageType="type" />;
};

export default ProductTypes;
