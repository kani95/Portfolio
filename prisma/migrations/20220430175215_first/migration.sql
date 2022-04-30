-- CreateTable
CREATE TABLE "Project" (
    "project_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "long_description" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("project_id")
);
