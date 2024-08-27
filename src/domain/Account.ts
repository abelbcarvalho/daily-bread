import {
    EnumGender,
    EnumLegalPerson,
} from "@prisma/client";

export type Account = {
    name: string;
    gender: EnumGender;
    socialName?: string | undefined;
    person: EnumLegalPerson;
    cpf?: string | undefined;
    cnpj?: string | undefined;
    email: string;
    username: string;
    password: string;
    mobile: string;
    active?: boolean | undefined;   
}
