import {
  AllProductsResponse,
  ProductsResponse,
  TypeWiseProductsResponse,
} from "./products";

export type CategoryPageProps = {
  pageType: "category";
  data: ProductsResponse;
  slug: string;
};

export type TypePageProps = {
  pageType: "type";
  data: TypeWiseProductsResponse;
  slug: string;
};

export type AllProductsPageProps = {
  pageType: "allProducts";
  data: AllProductsResponse;
  slug?: string;
};

export type UnionProductsProps =
  | CategoryBannerProps
  | TypeBannerProps
  | AllProductsBannerProps;
