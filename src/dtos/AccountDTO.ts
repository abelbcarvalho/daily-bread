import { EnumGender } from "@enumerates/EnumGender";
import { EnumLegalPerson } from "@enumerates/EnumLegalPerson";

export interface AccountDTO {
    name: string;
    gender: EnumGender;
    socialName?: string;
    person: EnumLegalPerson;
    cpf?: string;
    cnpj?: string;
    email: string;
    username: string;
    password: string;
    mobile: string;
    active?: boolean;
}
