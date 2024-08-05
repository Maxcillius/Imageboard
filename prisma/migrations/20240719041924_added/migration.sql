/*
  Warnings:

  - You are about to drop the `boards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "boards";

-- CreateTable
CREATE TABLE "Boards" (
    "id" SERIAL NOT NULL,
    "board_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "Boards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Threads" (
    "id" SERIAL NOT NULL,
    "parent" TEXT NOT NULL,

    CONSTRAINT "Threads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Boards_board_id_key" ON "Boards"("board_id");

-- CreateIndex
CREATE UNIQUE INDEX "Boards_name_key" ON "Boards"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Threads_parent_key" ON "Threads"("parent");

-- AddForeignKey
ALTER TABLE "Threads" ADD CONSTRAINT "Threads_parent_fkey" FOREIGN KEY ("parent") REFERENCES "Boards"("board_id") ON DELETE RESTRICT ON UPDATE CASCADE;
