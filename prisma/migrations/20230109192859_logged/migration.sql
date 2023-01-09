/*
  Warnings:

  - Added the required column `logged_in` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `logged_in` BOOLEAN NOT NULL;
