import { RecursivePayment } from "@domain/RecursivePayment";
import { DatabaseException } from "@exceptions/DatabaseException";
import { RecursivePayIntefaceRepository } from "@interfaces/RecursivePayInterfaceRepository";
import { PrismaClient } from "@prisma/client";

export class RecursivePayRepository implements RecursivePayIntefaceRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createNewRecursivePayment(recursivePay: RecursivePayment): Promise<any> {
        try {
            this.prisma.$connect();

            let response: any;

            await this.prisma.$transaction(async (db) => {
                response = await db.recuersivePayment.create({ data: recursivePay });
            });

            return response;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to create a new recursive payment", 422)
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async updateAnExistingRecursivePayment(recursivePay: RecursivePayment, recPayId: number): Promise<any> {
        try {
            this.prisma.$connect();

            let response: any;

            await this.prisma.$transaction(async (db) => {
                response = await db.recuersivePayment.update({
                    data: recursivePay,
                    where: { id: recPayId }
                });
            });

            return response;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to update an existing recursive payment", 422)
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getAllRecursivePaymentsByAccountId(accountId: number): Promise<any> {
        try {
            this.prisma.$connect();

            let allRecursivePays: any;

            await this.prisma.$transaction(async (db) => {
                allRecursivePays = await db.recuersivePayment.findMany({where: {accountId: accountId}});
            });

            return allRecursivePays;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to get all recursive payments", 422)
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
