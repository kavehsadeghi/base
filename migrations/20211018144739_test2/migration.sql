/*
  Warnings:

  - You are about to alter the column `title` on the `Job` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `Job` MODIFY `title` JSON NOT NULL;
