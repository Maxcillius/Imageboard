/*
  Warnings:

  - Added the required column `category` to the `Boards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boards" ADD COLUMN     "category" TEXT NOT NULL;
