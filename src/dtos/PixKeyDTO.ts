import { EnumPixKey } from "../enumerates/EnumPixKey";

export interface PixKeyDTO {
    descript?: string;
    typeKey: EnumPixKey;
    pixKey: string;
    bankId: number;
}
