import { EnumMoney } from "@enumerates/EnumMoney";

export interface BankBoxOperationDTO {
    descript?: string;
    typeOpr: EnumMoney;
    balance: number;
    bankBoxId: number;
}
