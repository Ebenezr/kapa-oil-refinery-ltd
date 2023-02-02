export type Product = {
  id: number;
  name: string;
  description: string | null;
  price: number;
  image_url: string;
  size: string;
  reviews: [] | null;
  categoryId: number;
  discountId: number | null;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductCategory = {
  id: number;
  name: string;
  products: [] | null;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductReview = {
  id: number;
  productId: number;
  rating: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductInventory = {
  id: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductDiscount = {
  id: number;
  name: string;
  percentage_discount: number;
  active: boolean;
  code: string;
  createdAt: Date;
  updatedAt: Date;
};

// user
