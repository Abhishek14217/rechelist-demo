import { getAllProducts } from "@/apis/get-apis";
import ProductListingLayout from "@/components/common/layout/ProductsListingLayout";
import { AllProductsResponse } from "@/types/products";

const Products = async () => {
  //-------------------API CALL------------------------
  const allProducts: AllProductsResponse = await getAllProducts();
  return (
    <ProductListingLayout
      title={"All Products"}
      subtitle={"Explore Our Wide Range Of Products"}
      productsList={allProducts.data}
      per_page={allProducts.per_page}
      last_page={allProducts.last_page}
      total={allProducts.total}
      pageType={"allProducts"}
    />
  );
};

export default Products;
