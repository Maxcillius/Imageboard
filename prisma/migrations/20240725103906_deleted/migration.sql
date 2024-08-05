/*
  Warnings:

  - You are about to drop the column `thread_id` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the `Threads` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `board_id` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_thread_id_fkey";

-- DropForeignKey
ALTER TABLE "Threads" DROP CONSTRAINT "Threads_parent_fkey";

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "thread_id",
ADD COLUMN     "board_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "Threads";

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "Boards"("board_id") ON DELETE CASCADE ON UPDATE CASCADE;
