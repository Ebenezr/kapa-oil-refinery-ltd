import * as z from "zod";

export const ProductSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  description: z.string(),
  price: z.number({ required_error: "Price is required" }).positive(),
  image_url: z.string(),
  size: z.string({ required_error: "Size is required" }),
  categoryId: z.number(),
  discountId: z.number(),
});

export const ProductCategorySchema = z.object({
  id: z.number().positive(),
  name: z.string(),
});

export const ProductReviewSchema = z.object({
  id: z.number().positive(),
  productId: z.number().positive(),
  rating: z.number(),
  description: z.string(),
});

export const ProductInventorySchema = z.object({
  id: z.number().positive(),
  quantity: z.number().positive(),
});

export const ProductDiscountSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  percentage_discount: z.number(),
  active: z.boolean(),
  code: z.string(),
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type FilterQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateProductInput = z.TypeOf<typeof ProductSchema>;
export type CreateProductCategoryInput = z.TypeOf<typeof ProductCategorySchema>;
export type CreateProductReviewInput = z.TypeOf<typeof ProductReviewSchema>;
export type CreateProductInventoryInput = z.TypeOf<
  typeof ProductInventorySchema
>;
export type CreateProductDiscountInput = z.TypeOf<typeof ProductDiscountSchema>;
