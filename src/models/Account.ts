import { EnumGender } from "@enumerates/EnumGender";
import { EnumLegalPerson } from "@enumerates/EnumLegalPerson";

export class Account {
    public id: number = 0;

    public name: string = "";
    public gender: EnumGender = EnumGender.NOT_SAY;
    public socialName?: string;
    public person: EnumLegalPerson = EnumLegalPerson.PHYSICAL_PERSON;
    public cpf?: string;
    public cnpj?: string;
    public email: string = "";
    public username: string = "";
    public password: string = "";
    public mobile: string = "";

    public createdAt: Date = new Date(2000, 1, 1);
    public updatedAt: Date = new Date(2000, 1, 1);
}
