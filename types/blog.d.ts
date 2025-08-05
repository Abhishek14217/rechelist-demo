// Category type
export type Category = {
  id: number;
  name: string;
  slug: string;
  url: string;
  description: string;
};

// Tag type
export type Tag = {
  id: number;
  name: string;
  slug: string;
  description: string;
};

// Blog post type
export type Post = {
  id: number;
  name: string; // Title of the post
  slug: string;
  description: string;
  image: string;
  categories: Category[];
  tags: Tag[];
  created_at: string; // ISO datetime string
  updated_at: string;
};

// Pagination links (first, last, next, prev)
export type PaginationLinks = {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
};

// Meta pagination info
export type MetaLink = {
  url: string | null;
  label: string;
  active: boolean;
};

export type Meta = {
  current_page: number;
  from: number;
  last_page: number;
  links: MetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

// Main API response type
export type PostsApiResponse = {
  data: Post[];
  links: PaginationLinks;
  meta: Meta;
  error: boolean;
  message: string | null;
};
