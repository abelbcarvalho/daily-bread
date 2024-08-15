export interface InvoiceDTO {
    descript: string;
    totalValue: number;
    installments: number;
    installValue: number;
    paidInstallments: number;
    percentOff?: number;
    totalWithOff?: number;
    finished: boolean;
    cardId: number;
}
