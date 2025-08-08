//--------------------PRODUCT CATEGORIES AND PRODUCTS RANGE TYPE----------------------
export type CategoryStatus = {
  value: string;
  label: string;
};

export type Category = {
  id: number;
  title: string;
  slug: string;
  desc: string | null;
  short_desc: string | null;
  image: string | null;
  status: CategoryStatus;
  created_at: string;
  updated_at: string;
};

export type CategoriesResponse = {
  success: boolean;
  data: Category[];
  message: string;
};

//-------------------FEATURD PRODUCTS TYPE----------------------
export type Product = {
  id: number;
  title: string;
  combination: string | null;
  mrp: string | null;
  pack: string | null;
  image: string | null;
  type: string | null;
};

export type ProductCategoryType = {
  id: number;
  title: string;
  slug: string;
};

export type ProductsResponse = {
  success: boolean;
  category: ProductCategoryType;
  data: Product[];
  message: string;
};
