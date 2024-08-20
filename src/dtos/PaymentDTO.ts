import { EnumPayment } from "@enumerates/EnumPayment";

export interface PaymentDTO {
    descript: string;
    typePay: EnumPayment;
    balance: number;
    invoiceId: number;
}
