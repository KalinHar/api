-- CreateTable
CREATE TABLE "bootcamp" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "firstName" VARCHAR(30) NOT NULL,
    "lastName" VARCHAR(30) NOT NULL,

    CONSTRAINT "bootcamp_pkey" PRIMARY KEY ("id")
);
