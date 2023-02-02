import { Prisma, PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";

import {
  FilterQueryInput,
  CreateProduct,
  CreateProductCategorySchema,
  CreateProductDiscountSchema,
  CreateProductInventorySchema,
  CreateProductReviewSchema,
} from "./product.schema";

const prisma = new PrismaClient();

export const createProductController = async ({
  input,
}: {
  input: CreateProduct;
}) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: input.name,
        description: input.description,
        price: input.price,
        size: input.size,
        categoryId: input.categoryId,
        discountId: input.discountId,
        image_url: input.image_url,
      },
    });

    return {
      status: "success",
      data: {
        product,
      },
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Product with that name already exists",
        });
      }
    }
    throw error;
  }
};
