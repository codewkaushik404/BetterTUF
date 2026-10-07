-- CreateTable
CREATE TABLE "Sheet_Topic" (
    "sheet_id" INTEGER NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sheet_Topic_pkey" PRIMARY KEY ("sheet_id","topic_id")
);

-- AddForeignKey
ALTER TABLE "Sheet_Topic" ADD CONSTRAINT "Sheet_Topic_sheet_id_fkey" FOREIGN KEY ("sheet_id") REFERENCES "Sheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sheet_Topic" ADD CONSTRAINT "Sheet_Topic_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
