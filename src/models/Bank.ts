import { EnumBankAccount } from "@enumerates/EnumBankAccount";

export class Bank {
    public id: number = 0;

    public code: string = "";
    public name: string = "";
    public agency: string = "";
    public numberAcc: number = 0;
    public typeAcc: EnumBankAccount = EnumBankAccount.CHECKING;
    public variation: number = 0;
    public balance: number = 0;

    public accountId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
