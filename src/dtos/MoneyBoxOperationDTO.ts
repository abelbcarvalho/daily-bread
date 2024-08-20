import { EnumMoney } from "@enumerates/EnumMoney";

export interface MoneyBoxOperationDTO {
    descript: string;
    typeOpr: EnumMoney;
    balance: number;
    moneyBoxId: number;
}
