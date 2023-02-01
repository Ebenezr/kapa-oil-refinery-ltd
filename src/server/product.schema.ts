import * as z from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string({ required_error: "Name is required" }),
  description: z.string().optional(),
  price: z.number({ required_error: "Price is required" }).positive(),
  image_url: z.string().optional(),
  size: z.string({ required_error: "Size is required" }),
  categoryId: z.number(),
  discountId: z.number().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ProductCategorySchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ProductReviewSchema = z.object({
  id: z.number().positive(),
  productId: z.number().positive(),
  rating: z.number(),
  decs: z.string(),
  reviewId: z.number().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ProductInventorySchema = z.object({
  id: z.number().positive(),
  quantity: z.number().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ProductDiscountSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  percentage_discount: z.number(),
  active: z.boolean(),
  code: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type FilterQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateProduct = z.TypeOf<typeof ProductSchema>;
export type CreateProductCategorySchema = z.TypeOf<
  typeof ProductCategorySchema
>;
export type CreateProductReviewSchema = z.TypeOf<typeof ProductReviewSchema>;
export type CreateProductInventorySchema = z.TypeOf<
  typeof ProductInventorySchema
>;
export type CreateProductDiscountSchema = z.TypeOf<
  typeof ProductDiscountSchema
>;
