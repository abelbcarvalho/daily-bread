/*
  Warnings:

  - You are about to alter the column `balance` on the `Bank` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `balance` on the `BankBox` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `balance` on the `BankBoxOperation` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `limitBalance` on the `Card` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `limitUsed` on the `Card` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `totalValue` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `installValue` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `percentOff` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `totalWithOff` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `balance` on the `Money` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `balance` on the `MoneyBox` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `balance` on the `MoneyBoxOperation` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `balance` on the `MoneyOperation` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `balance` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - Made the column `accountId` on table `Bank` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "EnumStageRepeat" AS ENUM ('REPEAT', 'NO_REPEAT');

-- DropForeignKey
ALTER TABLE "Bank" DROP CONSTRAINT "Bank_accountId_fkey";

-- AlterTable
ALTER TABLE "Bank" ALTER COLUMN "balance" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "accountId" SET NOT NULL;

-- AlterTable
ALTER TABLE "BankBox" ALTER COLUMN "balance" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "BankBoxOperation" ALTER COLUMN "balance" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "limitBalance" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "limitUsed" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Invoice" ALTER COLUMN "totalValue" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "installValue" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "percentOff" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "totalWithOff" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Money" ALTER COLUMN "balance" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "MoneyBox" ALTER COLUMN "balance" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "MoneyBoxOperation" ALTER COLUMN "balance" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "MoneyOperation" ALTER COLUMN "balance" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "balance" SET DATA TYPE DECIMAL(10,2);

-- CreateTable
CREATE TABLE "RecuersivePayment" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "balance" DECIMAL(10,2) NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "stage" "EnumStageRepeat" NOT NULL,
    "finish" BOOLEAN NOT NULL DEFAULT false,
    "accountId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecuersivePayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RecuersivePayment" ADD CONSTRAINT "RecuersivePayment_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
