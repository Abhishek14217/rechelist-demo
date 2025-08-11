import { getTypeWiseProducts } from "@/apis/get-apis";
import ProductListingLayout from "@/components/common/layout/ProductsListingLayout";
import { TypeWiseProductsResponse } from "@/types/products";

type Params = Promise<{ slug: string }>;

const ProductTypes = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  //-------------------API CALL------------------------
  const typeWiseProducts: TypeWiseProductsResponse = await getTypeWiseProducts(
    slug
  );

  return (
    <ProductListingLayout
      title={typeWiseProducts.type.title}
      subtitle={typeWiseProducts.type.short_description}
      productsList={typeWiseProducts.data}
      per_page={typeWiseProducts.per_page}
      last_page={typeWiseProducts.last_page}
      total={typeWiseProducts.total}
      pageType = {"typeWiseSegregation"}
    />
  );
};

export default ProductTypes;
