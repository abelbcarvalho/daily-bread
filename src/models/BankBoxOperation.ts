import { EnumMoney } from "@enumerates/EnumMoney";

export class BankBoxOperation {
    public id: number = 0;

    public descript?: string; 
    public typeOpr: EnumMoney = EnumMoney.DEPOSIT; 
    public balance: number = 0;

    public bankBoxId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
