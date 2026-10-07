/*
  Warnings:

  - A unique constraint covering the columns `[clerkId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('SOLVED', 'NOT_SOLVED');

-- CreateEnum
CREATE TYPE "Revision" AS ENUM ('YES', 'NO', 'MAYBE');

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "clerkId" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "User_Problem" (
    "user_id" INTEGER NOT NULL,
    "problem_id" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'NOT_SOLVED',
    "revision" "Revision" NOT NULL DEFAULT 'NO',
    "personal_notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_Problem_pkey" PRIMARY KEY ("user_id","problem_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- AddForeignKey
ALTER TABLE "User_Problem" ADD CONSTRAINT "User_Problem_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Problem" ADD CONSTRAINT "User_Problem_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
