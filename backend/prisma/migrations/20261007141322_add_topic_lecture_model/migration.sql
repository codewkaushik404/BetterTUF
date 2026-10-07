-- CreateTable
CREATE TABLE "Topic_Lecture" (
    "topic_id" INTEGER NOT NULL,
    "lecture_id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Topic_Lecture_pkey" PRIMARY KEY ("topic_id","lecture_id")
);

-- AddForeignKey
ALTER TABLE "Topic_Lecture" ADD CONSTRAINT "Topic_Lecture_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic_Lecture" ADD CONSTRAINT "Topic_Lecture_lecture_id_fkey" FOREIGN KEY ("lecture_id") REFERENCES "Lecture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
