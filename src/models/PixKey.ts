import { EnumPixKey } from "@enumerates/EnumPixKey";

export class PixKey {
    public id: number = 0;

    public descript?: string;
    public typeKey: EnumPixKey = EnumPixKey.RANDOM;
    public pixKey: string = "";

    public bankId: number = 0;

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
