import { EnumStageRepeat } from "@enumerates/EnumStageRepeat";

export interface RecursivePaymentDTO {
    descript: string;
    balance: number;
    day: number;
    month: number;
    stage: EnumStageRepeat;
    finish: boolean;

    accountId: number;
}
