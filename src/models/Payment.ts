import { EnumPayment } from "@enumerates/EnumPayment";

export class Payment {
    public id: number = 0;

    public descript: string = "";
    public typePay: EnumPayment = EnumPayment.ACCOUNT;
    public balance: number = 0;

    public invoiceId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
