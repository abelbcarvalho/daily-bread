import { BankDTO } from "@dtos/BankDTO";
import { BodyException } from "@exceptions/BodyException";
import { EnumBankAccount } from "@enumerates/EnumBankAccount";
import { EnumBankAccount as EnumBankPrisma } from "@prisma/client";
import { Request } from "express";
import { EnumerateUtil } from "@utilities/enum/EnumerateUtil";
import { Bank as BankDomain } from "@domain/Bank";
import { Bank as BankModel } from "@models/Bank";
import { AdaptperFusion } from "./AdapterFusion";
import { BankUpdateDTO } from "@dtos/BankUpdateDTO";

export class AdapterBankDTO {
    private body: any;

    constructor(request: Request) {
        this.body = request.body === null ? null : request.body;
    }

    static async adaptBankDTOToDomain(bank: BankDTO): Promise<BankDomain> {
        const typeAcc = (
            await EnumerateUtil.getEnumerateValue(bank.typeAcc, EnumBankPrisma)
        );

        const accountId = parseInt(String(bank.accountId));

        const newBank: BankDomain = {
            code: bank.code,
            name: bank.name,
            typeAcc: typeAcc,
            agency: bank.agency,
            numberAcc: bank.numberAcc,
            variation: bank.variation,
            balance: bank.balance,
            accountId: accountId
        };

        return newBank;
    }

    static async adaptBankDomainToModel(bank: any): Promise<BankModel> {
        const typeAcc = (
            await EnumerateUtil.getEnumerateValue(bank.typeAcc, EnumBankAccount)
        );

        const balance = bank.balance as unknown as number;

        const newBank: BankModel = {
            id: bank.id,
            code: bank.code,
            name: bank.name,
            typeAcc: typeAcc,
            agency: bank.agency,
            numberAcc: bank.numberAcc,
            variation: bank.variation,
            balance: balance,
            accountId: bank.accountId,
            createdAt: bank.createdAt,
            updatedAt: bank.updatedAt
        };

        return newBank;
    }

    private async isBodyNull(): Promise<void> {
        if (this.body === null) {
            throw new BodyException("request body can't be null");
        }

        this.body = this.body as BankDTO;
    }

    async adapterBankDTO(): Promise<BankDTO> {
        await this.isBodyNull();

        const chaves = await AdaptperFusion.getDTOKeys<BankDTO>(new BankModel());

        this.body = await AdaptperFusion.fusionDataObjectRestrictDefined<Array<string>, Object, BankDTO>(
            chaves,
            this.body
        );

        const requires = await this.isBankDTORequired();

        if (!requires) {
            throw new BodyException("body is invalid for bank");
        }

        return await this.toBankDTO();
    }

    async adapterBankUpdateDTO(): Promise<BankUpdateDTO> {
        await this.isBodyNull();

        const chaves = await AdaptperFusion.getDTOKeys<BankUpdateDTO>(new BankModel());

        this.body = await AdaptperFusion.fusionDataObjectRestrictDefined<Array<string>, Object, BankUpdateDTO>(
            chaves,
            this.body
        );

        const validators = await this.isBankDTORequiredAllowUndefined();

        if (!validators) {
            throw new BodyException("body is invalid for bank update body");
        }

        return await this.toBankDTO();
    }

    /** checkers */

    private async isBankDTORequired(): Promise<boolean> {
        const requiredValidators = new Map<string, (value: any) => boolean>([
            ['name', value => typeof value === 'string'],
            ['code', value => typeof value === 'string'],
            ['agency', value => typeof value === 'string'],
            ['numberAcc', value => typeof value === 'string'],
            ['typeAcc', value => Object.values(EnumBankAccount).includes(value)],
            ['variation', value => typeof value === 'number'],
            ['balance', value => typeof value === 'number'],
        ]);

        return Array.from(requiredValidators.entries()).every(([key, validate]) => validate(this.body[key]));
    }

    private async isBankDTORequiredAllowUndefined(): Promise<boolean> {
        const requiredValidators = new Map<string, (value: any) => boolean>([
            ['name', value => typeof value === 'undefined' || typeof value === 'string'],
            ['code', value => typeof value === 'undefined' || typeof value === 'string'],
            ['agency', value => typeof value === 'undefined' || typeof value === 'string'],
            ['numberAcc', value => typeof value === 'undefined' || typeof value === 'string'],
            ['typeAcc', value => typeof value === 'undefined' || Object.values(EnumBankAccount).includes(value)],
            ['variation', value => typeof value === 'undefined' || typeof value === 'number'],
            ['balance', value => typeof value === 'undefined' || typeof value === 'number'],
        ]);

        return Array.from(requiredValidators.entries()).every(([key, validate]) => validate(this.body[key]));
    }

    /** utilities */

    private async toBankDTO(): Promise<BankDTO> {
        const typeAcc = await EnumerateUtil.getEnumerateValue(this.body.typeAcc, EnumBankAccount);

        const bank: BankDTO = {
            code: this.body.code,
            name: this.body.name,
            agency: this.body.agency,
            numberAcc: this.body.numberAcc,
            typeAcc: typeAcc,
            variation: this.body.variation,
            balance: this.body.balance,
            accountId: 0
        };

        return bank;
    }
}
