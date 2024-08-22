-- CreateEnum
CREATE TYPE "EnumBankAccount" AS ENUM ('SAVING', 'CHECKING', 'PAYMENT');

-- CreateEnum
CREATE TYPE "EnumCard" AS ENUM ('CREDIT', 'DEBIT', 'CREDIT_DEBIT', 'PRE_PAID');

-- CreateEnum
CREATE TYPE "EnumGender" AS ENUM ('MALE', 'FEMALE', 'NOT_SAY');

-- CreateEnum
CREATE TYPE "EnumLegalPerson" AS ENUM ('PHYSICAL_PERSON', 'LEGAL_PERSON');

-- CreateEnum
CREATE TYPE "EnumMethod" AS ENUM ('PIX', 'TED', 'DOC', 'BANK_SLIP');

-- CreateEnum
CREATE TYPE "EnumMoney" AS ENUM ('WITHDRAW', 'DEPOSIT');

-- CreateEnum
CREATE TYPE "EnumPayment" AS ENUM ('PIX', 'ACCOUNT', 'BANK_SLIP');

-- CreateEnum
CREATE TYPE "EnumPixKey" AS ENUM ('RANDOM', 'MOBILE', 'CPF', 'CNPJ', 'EMAIL');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "EnumGender" NOT NULL,
    "socialName" TEXT,
    "person" "EnumLegalPerson" NOT NULL,
    "cpf" TEXT,
    "cnpj" TEXT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "agency" TEXT NOT NULL,
    "numberAcc" INTEGER NOT NULL,
    "typeAcc" "EnumBankAccount" NOT NULL,
    "variation" INTEGER NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" INTEGER,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankBox" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "objective" INTEGER,
    "balance" DOUBLE PRECISION NOT NULL,
    "dayToRetire" TIMESTAMP(3),
    "expireDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bankId" INTEGER NOT NULL,

    CONSTRAINT "BankBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankBoxOperation" (
    "id" SERIAL NOT NULL,
    "descript" TEXT,
    "typeOpr" "EnumMoney" NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bankBoxId" INTEGER NOT NULL,

    CONSTRAINT "BankBoxOperation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankOperation" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "typeOpr" "EnumMoney" NOT NULL,
    "method" "EnumMethod" NOT NULL,
    "isExtern" BOOLEAN NOT NULL DEFAULT false,
    "receiver" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bankId" INTEGER NOT NULL,
    "receiverFk" INTEGER,

    CONSTRAINT "BankOperation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankOprPayment" (
    "id" SERIAL NOT NULL,
    "bankOprId" INTEGER NOT NULL,
    "paymentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BankOprPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "descript" TEXT,
    "typeCard" "EnumCard" NOT NULL,
    "flag" INTEGER,
    "numberCard" TEXT NOT NULL,
    "codeSec" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "expireDate" TIMESTAMP(3) NOT NULL,
    "limitBalance" DOUBLE PRECISION NOT NULL,
    "limitUsed" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bankId" INTEGER NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "totalValue" DOUBLE PRECISION NOT NULL,
    "installments" INTEGER NOT NULL,
    "installValue" DOUBLE PRECISION NOT NULL,
    "paidInstallments" INTEGER NOT NULL,
    "percentOff" DOUBLE PRECISION,
    "totalWithOff" DOUBLE PRECISION,
    "finished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Money" (
    "id" SERIAL NOT NULL,
    "descript" TEXT,
    "balance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "Money_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MoneyBox" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "objective" INTEGER,
    "balance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "moneyId" INTEGER NOT NULL,

    CONSTRAINT "MoneyBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MoneyBoxOperation" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "typeOpr" "EnumMoney" NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "moneyBoxId" INTEGER NOT NULL,

    CONSTRAINT "MoneyBoxOperation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MoneyOperation" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "typeOpr" "EnumMoney" NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "moneyId" INTEGER NOT NULL,

    CONSTRAINT "MoneyOperation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MoneyOprBox" (
    "id" SERIAL NOT NULL,
    "moneyOprId" INTEGER NOT NULL,
    "moneyBoxOprId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MoneyOprBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "typePay" "EnumPayment" NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "invoiceId" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PixKey" (
    "id" SERIAL NOT NULL,
    "descript" TEXT,
    "typeKey" "EnumPixKey" NOT NULL,
    "pixKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bankId" INTEGER NOT NULL,

    CONSTRAINT "PixKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_cpf_key" ON "Account"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Account_cnpj_key" ON "Account"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankBox" ADD CONSTRAINT "BankBox_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankBoxOperation" ADD CONSTRAINT "BankBoxOperation_bankBoxId_fkey" FOREIGN KEY ("bankBoxId") REFERENCES "BankBox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankOperation" ADD CONSTRAINT "BankOperation_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankOprPayment" ADD CONSTRAINT "BankOprPayment_bankOprId_fkey" FOREIGN KEY ("bankOprId") REFERENCES "BankOperation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankOprPayment" ADD CONSTRAINT "BankOprPayment_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Money" ADD CONSTRAINT "Money_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoneyBox" ADD CONSTRAINT "MoneyBox_moneyId_fkey" FOREIGN KEY ("moneyId") REFERENCES "Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoneyBoxOperation" ADD CONSTRAINT "MoneyBoxOperation_moneyBoxId_fkey" FOREIGN KEY ("moneyBoxId") REFERENCES "MoneyBox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoneyOperation" ADD CONSTRAINT "MoneyOperation_moneyId_fkey" FOREIGN KEY ("moneyId") REFERENCES "Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoneyOprBox" ADD CONSTRAINT "MoneyOprBox_moneyOprId_fkey" FOREIGN KEY ("moneyOprId") REFERENCES "MoneyOperation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoneyOprBox" ADD CONSTRAINT "MoneyOprBox_moneyBoxOprId_fkey" FOREIGN KEY ("moneyBoxOprId") REFERENCES "MoneyBoxOperation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PixKey" ADD CONSTRAINT "PixKey_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
