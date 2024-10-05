import { Money } from "@domain/Money";
import { DatabaseException } from "@exceptions/DatabaseException";
import { MoneyInterfaceRepository } from "@interfaces/MoneyInterfaceRepository";
import { PrismaClient } from "@prisma/client";

export class MoneyRepository implements MoneyInterfaceRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createNewMoneyRegistry(money: Money): Promise<any> {
        try {
            this.prisma.$connect();

            let response: any;

            await this.prisma.$transaction(async (db) => {
                response = await db.money.create({ data: money });
            });

            return response;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to create a new money cash registry", 422);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async updateExistingMoneyRegistry(money: Money, moneyId: number): Promise<any> {
        try {
            this.prisma.$connect();

            let response: any;

            await this.prisma.$transaction(async (db) => {
                response = await db.money.update({
                    data: money,
                    where: { id: moneyId }
                });
            });

            return response;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to update an existing money cash registry", 422);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getAllMoneyByAccountId(accountId: number): Promise<Array<any>> {
        try {
            this.prisma.$connect();

            let allMoneyCash: any;

            await this.prisma.$transaction(async (db) => {
                allMoneyCash = await db.money.findMany({ where: { accountId: accountId } });
            });

            return allMoneyCash;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation to get all money cash registries has failed", 422);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
