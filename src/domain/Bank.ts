import { EnumBankAccount } from "@prisma/client";

export type Bank = {
    code: string;
    name: string;
    agency: string;
    numberAcc: string;
    typeAcc: EnumBankAccount;
    variation: number;
    balance: number;
    accountId: number;
}
