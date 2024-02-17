/*
  Warnings:

  - You are about to drop the column `date` on the `userStorage` table. All the data in the column will be lost.
  - You are about to drop the column `storegeId` on the `userStorage` table. All the data in the column will be lost.
  - Added the required column `dateEnd` to the `userStorage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateStart` to the `userStorage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storageId` to the `userStorage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "userStorage" DROP CONSTRAINT "userStorage_storegeId_fkey";

-- AlterTable
ALTER TABLE "userStorage" DROP COLUMN "date",
DROP COLUMN "storegeId",
ADD COLUMN     "dateEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateStart" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "storageId" INTEGER NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AddForeignKey
ALTER TABLE "userStorage" ADD CONSTRAINT "userStorage_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "storage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
