import { EnumStageRepeat } from "@enumerates/EnumStageRepeat";

export class RecuersivePayment {
    public id: number = 0;

    public descript: string = "";
    public balance: number = 0;
    public day: number = 0;
    public month: number = 0;
    public stage: EnumStageRepeat = EnumStageRepeat.NO_REPEAT;
    public finish: boolean = false;

    public accountId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
