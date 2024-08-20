import { EnumCard } from "@enumerates/EnumCard";

export class Card {
    public id: number = 0;

    public descript?: string = "";
    public typeCard: EnumCard = EnumCard.DEBIT;
    public flag?: number = 0;
    public numberCard: string = "";
    public codeSec: string = "";
    public fullName: string = "";
    public expireDate: Date = new Date(2000, 1, 1);
    public limitBalance: number = 0;
    public limitUsed?: number = 0;

    public bankId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
