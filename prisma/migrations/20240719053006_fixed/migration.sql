-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_thread_id_fkey";

-- DropForeignKey
ALTER TABLE "Threads" DROP CONSTRAINT "Threads_parent_fkey";

-- AddForeignKey
ALTER TABLE "Threads" ADD CONSTRAINT "Threads_parent_fkey" FOREIGN KEY ("parent") REFERENCES "Boards"("board_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "Threads"("id") ON DELETE CASCADE ON UPDATE CASCADE;
