-- CreateTable
CREATE TABLE "Problem_Lecture" (
    "problem_id" INTEGER NOT NULL,
    "lecture_id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Problem_Lecture_pkey" PRIMARY KEY ("problem_id","lecture_id")
);

-- AddForeignKey
ALTER TABLE "Problem_Lecture" ADD CONSTRAINT "Problem_Lecture_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Problem_Lecture" ADD CONSTRAINT "Problem_Lecture_lecture_id_fkey" FOREIGN KEY ("lecture_id") REFERENCES "Lecture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
