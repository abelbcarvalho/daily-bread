import { Request } from "express";
import { Account as AccountDomain } from "@domain/Account";
import { AccountDTO } from "@dtos/AccountDTO";
import { Account as AccountModel } from "@models/Account";
import { EnumGender } from "@enumerates/EnumGender";
import {
    EnumGender as GenderEnum,
    EnumLegalPerson as LegalPersonEnum,
} from "@prisma/client";
import { EnumLegalPerson } from "@enumerates/EnumLegalPerson";
import { BodyException } from "@exceptions/BodyException";
import { EnumerateUtil } from "@utilities/enum/EnumerateUtil";

export class AddapterAccountDTO {
    private body: any;

    constructor(request: Request) {
        this.body = request.body === null ? null : request.body;
    }

    private async isBodyNull(): Promise<void> {
        if (this.body === null) {
            throw new BodyException("request body can't be null");
        }

        this.body = this.body as AccountDTO;
    }

    private async isAccountDTORequired(): Promise<boolean> {
        const requiredValidators = new Map<string, (value: any) => boolean>([
            ['name', value => typeof value === 'string'],
            ['gender', value => Object.values(EnumGender).includes(value)],
            ['person', value => Object.values(EnumLegalPerson).includes(value)],
            ['email', value => typeof value === 'string'],
            ['username', value => typeof value === 'string'],
            ['password', value => typeof value === 'string'],
            ['mobile', value => typeof value === 'string'],
        ]);

        return Array.from(requiredValidators.entries()).every(([key, validate]) => validate(this.body[key]));
    }

    private async isAccountDTOOptional(): Promise<boolean> {
        const optionalValidators = new Map<string, (value: any) => boolean>([
            ['socialName', value => !value || typeof value === 'string'],
            ['cpf', value => !value || typeof value === 'string'],
            ['cnpj', value => !value || typeof value === 'string'],
        ]);

        return Array.from(optionalValidators.entries()).every(([key, validate]) => validate(this.body[key]));
    }

    async adapterAccountDTO(): Promise<AccountDTO> {
        await this.isBodyNull();

        const requires = await this.isAccountDTORequired();
        const optionals = await this.isAccountDTOOptional();

        if ([requires, optionals].includes(false)) {
            throw new BodyException("body is invalid for account");
        }

        return this.body;
    }

    static async adaptAccountDTOToDomain(account: AccountDTO): Promise<AccountDomain> {
        const gender = (
            await EnumerateUtil.typescriptEnumToPrismaEnum(account.gender, GenderEnum)
        );

        const person = (
            await EnumerateUtil.typescriptEnumToPrismaEnum(account.person, LegalPersonEnum)
        );

        const newAccount: AccountDomain = {
            name: account.name,
            gender: gender,
            socialName: account.socialName,
            person: person,
            cpf: account.cpf,
            cnpj: account.cnpj,
            email: account.email,
            username: account.username,
            password: account.password,
            mobile: account.mobile,
            active: account.active
        };

        return newAccount;
    }

    static async adaptAccountDomainToModel(account: any, omitPasswd: boolean = true): Promise<AccountModel> {
        const gender = (
            await EnumerateUtil.prismaEnumToTypescriptEnum(account.gender, EnumGender)
        );

        const person = (
            await EnumerateUtil.prismaEnumToTypescriptEnum(account.person, EnumLegalPerson)
        );

        const newAccount: AccountModel = {
            id: account.id,
            name: account.name,
            gender: gender,
            socialName: account.socialName,
            person: person,
            cpf: account.cpf,
            cnpj: account.cnpj,
            email: account.email,
            username: account.username,
            password: account.password,
            mobile: account.mobile,
            active: account.active,
            createdAt: account.createdAt,
            updatedAt: account.updatedAt
        };

        if (omitPasswd) {
            newAccount.password = undefined;
        }

        return newAccount;
    }
}
