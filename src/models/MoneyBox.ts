export class MoneyBox {
    public id: number = 0;

    public descript: string = "";
    public objective?: number = 0;
    public balance: number = 0;

    public moneyId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
