import { EnumMoney } from "@enumerates/EnumMoney";

export class MoneyOperation {
    public id: number = 0;

    public descript: string = "";
    public typeOpr: EnumMoney = EnumMoney.DEPOSIT;
    public balance: number = 0;

    public moneyId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
