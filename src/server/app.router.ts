import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import {
  createProductCategoryController,
  createProductController,
  createProductDiscountController,
  createProductInventoryController,
  createProductReviewController,
} from "./product.controller";
import {
  createProductSchema,
  createProductCategorySchema,
  createProductDiscountSchema,
  createProductInventorySchema,
  createProductReviewSchema,
} from "./product.schema";

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  getHello: t.procedure.query((req) => {
    return { message: "Welcome to Full-Stack tRPC CRUD App with Next.js" };
  }),
  createProduct: t.procedure
    .input(createProductSchema)
    .mutation(({ input }) => createProductController({ input })),
});

export type AppRouter = typeof appRouter;
