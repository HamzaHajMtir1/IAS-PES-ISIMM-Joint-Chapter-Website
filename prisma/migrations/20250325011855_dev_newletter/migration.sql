/*
  Warnings:

  - You are about to drop the column `email` on the `NewsLetters` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emails]` on the table `NewsLetters` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emails` to the `NewsLetters` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "NewsLetters_email_key";

-- AlterTable
ALTER TABLE "NewsLetters" DROP COLUMN "email",
ADD COLUMN     "emails" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "NewsLetters_emails_key" ON "NewsLetters"("emails");
