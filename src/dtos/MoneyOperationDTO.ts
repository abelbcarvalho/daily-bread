import { EnumMoney } from "@enumerates/EnumMoney";

export interface MoneyOperationDTO {
    descript: string;
    typeOpr: EnumMoney;
    balance: number;
    moneyId: number;
}
