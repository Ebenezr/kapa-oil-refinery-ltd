import { Decimal } from "@prisma/client/runtime";
import { number } from "zod";

export type Product = {
  id: number;
  name: string;
  description: string | null;
  price: number;
  rating: number | null;
  image_url: string;
  size: string;
  reviews: [] | null;
  categoryId: number;
  discountId: number | null;
};

export type ProductCategory = {
  id: number;
  name: string;
  products: [] | null;
};

export type ProductReview = {
  id: number;
  productId: number;
  userId: number;
  rating: number;
  description: string | null;
};

export type ProductInventory = {
  id: number;
  productId: number;
  quantity: number;
};

export type ProductDiscount = {
  id: number;
  name: string;
  percentage_discount: number;
  active: boolean;
  code: string;
};

export type Address = {
  id: number;
  userId: number;
  phone1: string;
  phone2: string | null;
  station: string | null;
};

export type Orders = {
  id: number;
  userId: number;
  productPaymentId: number;
  addressId: number;
  // TODO :make enum
  status: string;
  amount: Decimal;
};

export type OrderList = {
  id: number;
  productId: number;
  orderId: number;
};

export type productPayment = {
  id: number;
  provider: string;
  acc_number: string;
  userid: number;
};

// user
export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string | null;
};
