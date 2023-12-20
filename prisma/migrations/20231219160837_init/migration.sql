/*
  Warnings:

  - You are about to drop the column `body` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `body` on the `Replies` table. All the data in the column will be lost.
  - You are about to drop the column `body` on the `Topics` table. All the data in the column will be lost.
  - Added the required column `content` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Replies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Topics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "body",
ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Replies" DROP COLUMN "body",
ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Topics" DROP COLUMN "body",
ADD COLUMN     "content" TEXT NOT NULL;
