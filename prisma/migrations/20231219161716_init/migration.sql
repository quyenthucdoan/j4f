/*
  Warnings:

  - You are about to drop the column `content` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Replies` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Topics` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Topics` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[topic_name]` on the table `Topics` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `body` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `body` to the `Replies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `body` to the `Topics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic_name` to the `Topics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hased_password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Topics_name_key";

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "content",
ADD COLUMN     "body" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Replies" DROP COLUMN "content",
ADD COLUMN     "body" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Topics" DROP COLUMN "content",
DROP COLUMN "name",
ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "topic_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "password",
ADD COLUMN     "hased_password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Topics_topic_name_key" ON "Topics"("topic_name");
