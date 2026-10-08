/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Lecture` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Problem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Sheet` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Topic` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Lecture_title_key" ON "Lecture"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Problem_title_key" ON "Problem"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Sheet_title_key" ON "Sheet"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_title_key" ON "Topic"("title");
