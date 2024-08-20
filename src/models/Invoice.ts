export class Invoice {
    public id: number = 0;

    public descript: string = "";
    public totalValue: number = 0;
    public installments: number = 0;
    public installValue: number = 0;
    public paidInstallments: number = 0;
    public percentOff?: number = 0;
    public totalWithOff?: number = 0;
    public finished: boolean = false;

    public cardId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
