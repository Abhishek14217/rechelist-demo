import ProductsListingLayout from "@/components/common/layout/ProductsListingLayout";
import { getAllProducts } from "@/apis/get-apis";
import { getAbsoluteUrl } from "@/utils/helper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";

export const generateMetadata = async () => {
  const pageData = await getAllProducts();
  const pageUrl = getAbsoluteUrl("/products");

  return generateSeoMetadata(pageData.allproducts, pageUrl, "article");
};

const Products = async () => {
  return <ProductsListingLayout pageType="allProducts" />;
};

export default Products;
