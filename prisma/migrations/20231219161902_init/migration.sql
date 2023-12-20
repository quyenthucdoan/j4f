/*
  Warnings:

  - You are about to drop the `Likes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Replies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Topics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Views` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Likes" DROP CONSTRAINT "Likes_post_id_fkey";

-- DropForeignKey
ALTER TABLE "Likes" DROP CONSTRAINT "Likes_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Replies" DROP CONSTRAINT "Replies_post_id_fkey";

-- DropForeignKey
ALTER TABLE "Replies" DROP CONSTRAINT "Replies_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Views" DROP CONSTRAINT "Views_post_id_fkey";

-- DropForeignKey
ALTER TABLE "Views" DROP CONSTRAINT "Views_user_id_fkey";

-- DropTable
DROP TABLE "Likes";

-- DropTable
DROP TABLE "Posts";

-- DropTable
DROP TABLE "Replies";

-- DropTable
DROP TABLE "Topics";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "Views";
