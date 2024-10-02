import { Bank } from "@domain/Bank";
import { DatabaseException } from "@exceptions/DatabaseException";
import { BankInterfaceRepository } from "@interfaces/BankInterfaceRepository";
import { PrismaClient } from "@prisma/client";

export class BankRepository implements BankInterfaceRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createNewBankAccount(bank: Bank): Promise<any> {
        try {
            this.prisma.$connect();

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
            this.prisma.$disconnect();
        }
    }
}
