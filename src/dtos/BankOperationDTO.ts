import { EnumMethod } from "../enumerates/EnumMethod";
import { EnumMoney } from "../enumerates/EnumMoney";

export interface BankOperationDTO {
    descript: string;
    typeOpr: EnumMoney;
    method: EnumMethod;
    isExtern: boolean;
    receiver?: string;
    bankId: number;
    receiverFk?: number;
}
