import { Prisma, PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";

import {
  FilterQueryInput,
  CreateProductInput,
  CreateProductCategoryInput,
  CreateProductDiscountInput,
  CreateProductInventoryInput,
  CreateProductReviewInput,
} from "./product.schema";

const prisma = new PrismaClient();

// post products
export const createProductController = async ({
  input,
}: {
  input: CreateProductInput;
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

// post products categories
export const createProductCategoryController = async ({
  input,
}: {
  input: CreateProductCategoryInput;
}) => {
  try {
    const productCategory = await prisma.productCategory.create({
      data: {
        name: input.name,
      },
    });

    return {
      status: "success",
      data: {
        productCategory,
      },
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Product category with that name already exists",
        });
      }
    }
    throw error;
  }
};

// post a product review
export const createProductReviewController = async ({
  input,
}: {
  input: CreateProductReviewInput;
}) => {
  try {
    const productReview = await prisma.productReview.create({
      data: {
        productId: input.productId,
        rating: input.rating,
        description: input.description,
      },
    });

    return {
      status: "success",
      data: {
        productReview,
      },
    };
  } catch (error) {
    throw error;
  }
};

// post product discount
export const createProductDiscountController = async ({
  input,
}: {
  input: CreateProductDiscountInput;
}) => {
  try {
    const productDiscount = await prisma.productDiscount.create({
      data: {
        name: input.name,
        percentage_discount: input.percentage_discount,
        active: input.active,
        code: input.code,
      },
    });

    return {
      status: "success",
      data: {
        productDiscount,
      },
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Product discount with that code already exists",
        });
      }
    }
    throw error;
  }
};

// post product inventory
export const createProductInventoryController = async ({
  input,
}: {
  input: CreateProductInventoryInput;
}) => {
  try {
    const productInventory = await prisma.productInventory.create({
      data: {
        quantity: input.quantity,
      },
    });

    return {
      status: "success",
      data: {
        productInventory,
      },
    };
  } catch (error) {
    throw error;
  }
};
