export class BankBox {
    public id: number = 0;

    public descript: string = "";
    public objective?: number;
    public balance: number = 0;
    public dayToRetire?: Date;
    public expireDate?: Date;

    public bankId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
