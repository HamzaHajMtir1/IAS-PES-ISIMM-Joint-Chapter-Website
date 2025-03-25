-- CreateTable
CREATE TABLE "NewsLetters" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "NewsLetters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsLetters_email_key" ON "NewsLetters"("email");
