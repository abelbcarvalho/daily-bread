export class Money {
    public id: number = 0;

    public descript?: string;
    public balance: number = 0;

    public accountId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
