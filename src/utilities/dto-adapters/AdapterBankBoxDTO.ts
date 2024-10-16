import { BankBoxDTO } from '@dtos/BankBoxDTO';
import { BodyException } from '@exceptions/BodyException';
import { Request } from 'express';
import { AdaptperFusion } from './AdapterFusion';
import { BankBox } from '@models/BankBox';

export class AdapterBankBoxDTO {
    private body: any;

    constructor(request: Request) {
        this.body = request.body === null ? null : request.body;
    }

    private async isBodyNull(): Promise<void> {
        if (this.body === null) {
            throw new BodyException("request body can't be null");
        }
    
        this.body = this.body as BankBoxDTO;
    }

    async adapterBankBoxDTO(): Promise<BankBoxDTO> {
        await this.isBodyNull();

        const chaves = await AdaptperFusion.getDTOKeys<BankBoxDTO>(new BankBox());

        this.body = (
            await AdaptperFusion.fusionDataObjectRestrictDefined<Array<string>, Object, BankBoxDTO>(
                chaves,
                this.body
            )
        );

        const validators = await this.isBankDTOValid();

        if (!validators) {
            throw new BodyException("body is invalid for bank box");
        }
    
        return this.body;
    }

    async adapterBankBoxDTOUpdate(): Promise<BankBoxDTO> {
        await this.isBodyNull();

        const chaves = await AdaptperFusion.getDTOKeys<BankBoxDTO>(new BankBox());

        this.body = (
            await AdaptperFusion.fusionDataObjectRestrictDefined<Array<string>, Object, BankBoxDTO>(
                chaves,
                this.body
            )
        );

        const validators = await this.isBankDTOValidUpdate();

        if (!validators) {
            throw new BodyException("body is invalid for bank box update");
        }
    
        return this.body;
    }

    /** checkers */

    private async isBankDTOValid(): Promise<boolean> {
        const validators = new Map<string, (value: any) => boolean>([
            ["descript", value => typeof value === "string"],
            ["objective", value => ["number", "undefined", "null"].includes(typeof value)],
            ["balance", value => typeof value === "number"],
            ["dayToRetire", value => ["Date", "undefined", "null"].includes(typeof value)],
            ["expireDate", value => ["Date", "undefined", "null"].includes(typeof value)],
            ["bankId", value => typeof value === "number"]
        ]);

        return Array.from(validators.entries()).every(([key, validate]) => validate(this.body[key]));
    }

    private async isBankDTOValidUpdate(): Promise<boolean> {
        const validators = new Map<string, (value: any) => boolean>([
            ["descript", value => ["string", "undefined", "null"].includes(typeof value)],
            ["objective", value => ["number", "undefined", "null"].includes(typeof value)],
            ["balance", value => ["number", "undefined"].includes(typeof value)],
            ["dayToRetire", value => ["Date", "undefined", "null"].includes(typeof value)],
            ["expireDate", value => ["Date", "undefined", "null"].includes(typeof value)],
            ["bankId", value => ["number", "undefined"].includes(typeof value)]
        ]);

        return Array.from(validators.entries()).every(([key, validate]) => validate(this.body[key]));
    }
}
