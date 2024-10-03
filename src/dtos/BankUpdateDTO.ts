import { EnumBankAccount } from "@enumerates/EnumBankAccount";

export interface BankUpdateDTO {
    code?: string;
    name?: string;
    agency?: string;
    numberAcc?: string;
    typeAcc?: EnumBankAccount;
    variation?: number;
    balance?: number;
    accountId?: number;
}
