/*
  Warnings:

  - You are about to drop the column `notes` on the `Problem` table. All the data in the column will be lost.
  - The primary key for the `User_Problem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `user_id` on the `User_Problem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "User_Problem" DROP CONSTRAINT "User_Problem_user_id_fkey";

-- AlterTable
ALTER TABLE "Problem" DROP COLUMN "notes",
ADD COLUMN     "slides_url" TEXT;

-- AlterTable
ALTER TABLE "User_Problem" DROP CONSTRAINT "User_Problem_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "User_Problem_pkey" PRIMARY KEY ("user_id", "problem_id");

-- AddForeignKey
ALTER TABLE "User_Problem" ADD CONSTRAINT "User_Problem_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
