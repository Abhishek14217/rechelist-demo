import { getCategoryWiseProducts } from "@/apis/get-apis";
import ProductListingLayout from "@/components/common/layout/ProductsListingLayout";
import { ProductsResponse } from "@/types/products";

type Params = Promise<{ slug: string }>;

const ProductCategories = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  //-------------------API CALL------------------------
  const categoryWiseProducts: ProductsResponse = await getCategoryWiseProducts(
    slug
  );

  return (
    <ProductListingLayout
      title={categoryWiseProducts.category.title}
      subtitle={categoryWiseProducts.category.short_description}
      productsList={categoryWiseProducts.data}
      per_page={categoryWiseProducts.per_page}
      last_page={categoryWiseProducts.last_page}
      total={categoryWiseProducts.total}
    />
  );
};

export default ProductCategories;
