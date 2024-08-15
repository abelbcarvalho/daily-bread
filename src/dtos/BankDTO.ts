import { EnumBankAccount } from "../enumerates/EnumBankAccount";

export interface BankDTO {
    code: string;
    name: string;
    agency: string;
    numberAcc: number;
    typeAcc: EnumBankAccount;
    variation: number;
    balance: number;
    accountId: number;
}
