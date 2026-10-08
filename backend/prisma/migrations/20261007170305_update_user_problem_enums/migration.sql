/*
  Warnings:

  - The values [NO] on the enum `Revision` will be removed. If these variants are still used in the database, this will fail.
  - The values [NOT_SOLVED] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Revision_new" AS ENUM ('YES', 'MAYBE');
ALTER TABLE "public"."User_Problem" ALTER COLUMN "revision" DROP DEFAULT;
ALTER TABLE "User_Problem" ALTER COLUMN "revision" TYPE "Revision_new" USING ("revision"::text::"Revision_new");
ALTER TYPE "Revision" RENAME TO "Revision_old";
ALTER TYPE "Revision_new" RENAME TO "Revision";
DROP TYPE "public"."Revision_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('SOLVED');
ALTER TABLE "public"."User_Problem" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "User_Problem" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "public"."Status_old";
COMMIT;

-- AlterTable
ALTER TABLE "User_Problem" ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "status" DROP DEFAULT,
ALTER COLUMN "revision" DROP NOT NULL,
ALTER COLUMN "revision" DROP DEFAULT;
