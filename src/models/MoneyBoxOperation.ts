import { EnumMoney } from '@enumerates/EnumMoney';

export class MoneyBoxOperation {
    public id: number = 0;

    public descript: string = "";
    public typeOpr: EnumMoney = EnumMoney.DEPOSIT;
    public balance: number = 0;

    public moneyBoxId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
