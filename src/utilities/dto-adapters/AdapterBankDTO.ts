import { BankDTO } from "@dtos/BankDTO";
import { BodyException } from "@exceptions/BodyException";
import { EnumBankAccount } from "@enumerates/EnumBankAccount";
import { Request } from "express";
import { EnumerateUtil } from "@utilities/enum/EnumerateUtil";

export class AdapterBankDTO {
    private body: any;

    constructor(request: Request) {
        this.body = request.body === null ? null : request.body;
    }

    private async isBodyNull(): Promise<void> {
        if (this.body === null) {
            throw new BodyException("request body can't be null");
        }

        this.body = this.body as BankDTO;
    }

    async adapterBankDTO(): Promise<BankDTO> {
        await this.isBodyNull();

        const requires = await this.isBankDTORequired();

        if (!requires) {
            throw new BodyException("body is invalid for bank");
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
