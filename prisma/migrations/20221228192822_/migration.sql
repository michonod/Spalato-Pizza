/*
  Warnings:

  - You are about to drop the column `priceFrom` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `priceTo` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `birthDate` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `isAdmin` on the `user` table. All the data in the column will be lost.
  - Added the required column `admin` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birth_date` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `priceFrom`,
    DROP COLUMN `priceTo`,
    ADD COLUMN `price_from` VARCHAR(191) NOT NULL DEFAULT '0',
    ADD COLUMN `price_to` VARCHAR(191) NOT NULL DEFAULT '0';

-- AlterTable
ALTER TABLE `user` DROP COLUMN `birthDate`,
    DROP COLUMN `isAdmin`,
    ADD COLUMN `admin` BOOLEAN NOT NULL,
    ADD COLUMN `birth_date` DATETIME(3) NOT NULL;
