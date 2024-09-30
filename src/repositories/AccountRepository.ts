import { AccountLoginDTO } from "@dtos/AccountLoginDTO";
import { PrismaClient } from "@prisma/client";
import { DatabaseException } from "@exceptions/DatabaseException";
import { AccountInterfaceRepository } from "@interfaces/AccountInterfaceRepository";
import { Account } from "@domain/Account";

export class AccountRepository implements AccountInterfaceRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createNewAccount(account: Account): Promise<any> {
        try {
            await this.prisma.$connect();

            let newAccount: any;

            await this.prisma.$transaction(async (db) => {
                newAccount = await db.account.create({ data: account });
            });

            return newAccount;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to create account", 422);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async makeLoginExistingAccount(accountLogin: AccountLoginDTO): Promise<any> {
        try {
            await this.prisma.$connect();

            let existingAccount: any;

            await this.prisma.$transaction(async (db) => {
                existingAccount = await db.account.findFirst({
                    where: {
                        AND: [
                            {
                                OR: [
                                    { username: accountLogin.username },
                                    { email: accountLogin.username }
                                ],
                            },
                            { active: true }
                        ]
                    }
                });
            });

            if (!existingAccount) {
                throw new Error("account not found for these username or email");
            }

            return existingAccount;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException((error as Error).message, 422);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async deactiveExistingAccount(accountId: number): Promise<any> {
        try {
            await this.prisma.$connect();

            let result: any;

            await this.prisma.$transaction(async (db) => {
                result = await db.account.update({
                    data: {
                        active: false,
                    },
                    where: {
                        id: accountId
                    }
                })
            });

            return result;
        }
        catch (error) {
            console.error(error);
            throw new DatabaseException("database operation has failed to deactive account", 422);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
}
