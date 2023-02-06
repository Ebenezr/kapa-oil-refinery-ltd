import * as z from "zod";

export const createProductSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  description: z.string(),
  price: z.number({ required_error: "Price is required" }).positive(),
  inventory: z.number(),
  image_url: z.string(),
  size: z.string({ required_error: "Size is required" }),
  categoryId: z.number(),
  discountId: z.number(),
});

export const createProductCategorySchema = z.object({
  id: z.number().positive(),
  name: z.string(),
});

export const createProductReviewSchema = z.object({
  id: z.number().positive(),
  productId: z.number().positive(),
  rating: z.number(),
  description: z.string(),
});

export const createProductInventorySchema = z.object({
  id: z.number().positive(),
  quantity: z.number().positive(),
});

export const createProductDiscountSchema = z.object({
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
export type CreateProductInput = z.TypeOf<typeof createProductSchema>;
export type CreateProductCategoryInput = z.TypeOf<
  typeof createProductCategorySchema
>;
export type CreateProductReviewInput = z.TypeOf<
  typeof createProductReviewSchema
>;
export type CreateProductInventoryInput = z.TypeOf<
  typeof createProductInventorySchema
>;
export type CreateProductDiscountInput = z.TypeOf<
  typeof createProductDiscountSchema
>;
