import { EnumCard } from "../enumerates/EnumCard";

export interface CardDTO {
    descript?: string;
    typeCard: EnumCard;
    flag?: number;
    numberCard: string;
    codeSec: string;
    fullName: string;
    expireDate: Date;
    limitBalance: number;
    limitUsed?: number;
    bankId: number;
}
