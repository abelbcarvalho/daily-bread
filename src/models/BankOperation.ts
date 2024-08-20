import { EnumMethod } from "@enumerates/EnumMethod";
import { EnumMoney } from "@enumerates/EnumMoney";

export class BankOperation {
    public id: number = 0;

    public descript: string = "";
    public typeOpr: EnumMoney = EnumMoney.DEPOSIT;
    public method: EnumMethod = EnumMethod.BANK_SLIP;
    public isExtern: boolean = false;
    public receiver?: string;

    public bankId: number = 0;
    public receiverFk?: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
