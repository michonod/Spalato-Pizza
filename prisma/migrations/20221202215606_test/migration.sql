-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `tags` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `priceTo` VARCHAR(191) NOT NULL,
    `priceFrom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
