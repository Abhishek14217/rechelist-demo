import {
  getAllProducts,
  getCategoryWiseProducts,
  getTypeWiseProducts,
} from "@/apis/get-apis";
import ProductsGrid from "./ProductsGrid";

type ProductsSectionProps = {
  slug?: string;
  pageType: "category" | "type" | "allProducts";
};

const ProductsSection: React.FC<ProductsSectionProps> = async ({
  slug,
  pageType,
}) => {
  let data: any;

  if (pageType === "category") {
    data = await getCategoryWiseProducts(slug!);
  } else if (pageType === "type") {
    data = await getTypeWiseProducts(slug!);
  } else {
    data = await getAllProducts();
  }

  return (
    <ProductsGrid
      productsList={data.data}
      per_page={data.per_page}
      last_page={data.last_page}
      total={data.total}
      pageType={pageType}
    />
  );
};

export default ProductsSection;
