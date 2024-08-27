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
            throw new DatabaseException((error as Error).message, 422);
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
                                ]
                            },
                            { password: accountLogin.password }
                        ]
                    }
                });
            });

            return existingAccount;
        }
        catch (error) {
            throw new DatabaseException((error as Error).message, 422);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async deactiveExistingAccount(accountId: number): Promise<any> {
    }
}
