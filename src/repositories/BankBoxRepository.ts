import { BankBox } from "@domain/BankBox";
import { DatabaseException } from "@exceptions/DatabaseException";
import { BankBoxInterfaceRepository } from "@interfaces/BankBoxInterfaceRepository";
import { PrismaClient } from "@prisma/client";

export class BankBoxRepository implements BankBoxInterfaceRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createNewBankBox(bankBox: BankBox): Promise<any> {
        try {
            await this.prisma.$connect();

            let response: any;

            await this.prisma.$transaction(async (db) => {
                response = await db.bankBox.create({ data: bankBox });
            });

            return response;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to create a new bank box", 422);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }

    async updateAnExistingBankBox(bankBox: BankBox, bankBoxId: number): Promise<any> {
        try {
            await this.prisma.$connect();

            let response: any;

            await this.prisma.$transaction(async (db) => {
                response = await db.bankBox.update({ data: bankBox, where: { id: bankBoxId } })
            });

            return response;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to update an existing bank box", 422);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }

    async getAllBankBoxByBankId(bankId: number): Promise<any> {
        try {
            await this.prisma.$connect();

            let response: any;

            await this.prisma.$transaction(async (db) => {
                response = await db.bankBox.findMany({ where: { bankId: bankId } })
            });

            return response;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to get all bank boxes by bankId", 422);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
}
