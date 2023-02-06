/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `ProductCategory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductCategory" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategory_code_key" ON "ProductCategory"("code");
