import { EnumStageRepeat } from "@prisma/client";

export type RecursivePayment = {
    descript: string;
    balance: number;
    day: number;
    month: number;
    stage: EnumStageRepeat;
    finish: boolean;

    accountId: number;
}
