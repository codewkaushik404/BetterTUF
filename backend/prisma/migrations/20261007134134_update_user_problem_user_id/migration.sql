/*
  Warnings:

  - The primary key for the `User_Problem` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "User_Problem" DROP CONSTRAINT "User_Problem_user_id_fkey";

-- AlterTable
ALTER TABLE "User_Problem" DROP CONSTRAINT "User_Problem_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_Problem_pkey" PRIMARY KEY ("user_id", "problem_id");

-- AddForeignKey
ALTER TABLE "User_Problem" ADD CONSTRAINT "User_Problem_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
