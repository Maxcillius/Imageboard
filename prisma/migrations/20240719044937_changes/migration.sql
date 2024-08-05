/*
  Warnings:

  - The `created_at` column on the `Boards` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[name]` on the table `Threads` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Threads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Threads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posts` to the `Threads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boards" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Threads" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "posts" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "thread_id" INTEGER NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Threads_name_key" ON "Threads"("name");

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "Threads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
