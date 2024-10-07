import { Bank } from "@domain/Bank";
import { BankUpdateDTO } from "@dtos/BankUpdateDTO";
import { DatabaseException } from "@exceptions/DatabaseException";
import { BankInterfaceRepository } from "@interfaces/BankInterfaceRepository";
import { PrismaClient, Bank as BankPrisma, EnumBankAccount } from "@prisma/client";
import { AdaptperFusion } from "@utilities/dto-adapters/AdapterFusion";
import { EnumerateUtil } from "@utilities/enum/EnumerateUtil";

export class BankRepository implements BankInterfaceRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createNewBankAccount(bank: Bank): Promise<any> {
        try {
            await this.prisma.$connect();

            let response: any;

            await this.prisma.$transaction(async (db) => {
                response = await db.bank.create({ data: bank });
            });

            return response;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to create bank account", 422);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }

    async updateExistingBankAccount(bank: BankUpdateDTO, bankId: number): Promise<any> {
        try {
            await this.prisma.$connect();

            let response: any;

            await this.prisma.$transaction(async (db) => {
                const existingBank = await db.bank.findUnique({
                    where: { id: bankId }
                });

                const data = await AdaptperFusion.fusionDataObjectDefined<BankPrisma, BankUpdateDTO, BankPrisma>(
                    existingBank as unknown as BankPrisma, bank
                );

                data.typeAcc = await EnumerateUtil.getEnumerateValue(data.typeAcc, EnumBankAccount);

                response = await db.bank.update(
                    {
                        data: data,
                        where: { id: bankId }
                    }
                );
            });

            return response;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to update an existing account");
        }
        finally {
            await this.prisma.$disconnect();
        }
    }

    async getAllBankAccountFromAnUser(accountId: number): Promise<any> {
        try {
            await this.prisma.$connect();

            let response: any;

            await this.prisma.$transaction(async (db) => {
                response = await db.bank.findMany({ where: { accountId: accountId } });
            });

            return response;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation to get all banks from an account empty");
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
}
