import { Request } from "express";
import { RecursivePaymentDTO } from "@dtos/RecursivePaymentDTO";
import { BodyException } from "@exceptions/BodyException";
import { RecursivePayment as RecursivePayDomain } from "@domain/RecursivePayment";
import { RecursivePayment as RecursivePayModel } from "@models/RecursivePayment";
import { AdaptperFusion } from "./AdapterFusion";
import { EnumStageRepeat } from "@enumerates/EnumStageRepeat";

export class AdapterRecursivePaymentDTO {
    private body: any;

    constructor(request: Request) {
        this.body = request.body === null ? null : request.body;
    }

    private async isBodyNull(): Promise<void> {
        if (this.body === null) {
            throw new BodyException("request body can't be null");
        }

        this.body = this.body as RecursivePaymentDTO;
    }

    static async adapterRecursivePayDTOToDomain(recursivePay: RecursivePaymentDTO): Promise<RecursivePayDomain> {
        const keys = await AdaptperFusion.getDTOKeys<RecursivePayModel>(new RecursivePayModel());

        const domain = (
            await AdaptperFusion.fusionDataObjectRestrictDefined<Array<string>, Object, RecursivePayDomain>(
                keys,
                recursivePay
            )
        );

        return domain;
    }

    static async adapterRecursivePayDomainToModel(recursivePay: any): Promise<RecursivePayModel> {
        const keys = await AdaptperFusion.getDTOKeys<RecursivePayModel>(new RecursivePayModel());

        const model = (
            await AdaptperFusion.fusionDataObjectRestrictDefined<Array<string>, Object, RecursivePayModel>(
                keys,
                recursivePay
            )
        );

        return model;
    }

    async adapterRecursivePayDTO(): Promise<RecursivePaymentDTO> {
        await this.isBodyNull();

        const keys = await AdaptperFusion.getDTOKeys<RecursivePayModel>(new RecursivePayModel());

        this.body = (
            await AdaptperFusion.fusionDataObjectRestrictDefined<Array<string>, Object, RecursivePaymentDTO>(
                keys,
                this.body
            )
        )

        const validators = await this.checkObject();

        if (!validators) {
            throw new BodyException("body is invalid for bank update body");
        }

        return this.body;
    }

    private async checkObject(): Promise<boolean> {
        const validators = new Map<string, (value: any) => boolean>([
            ["descript", value => typeof value == "string"],
            ["balance", value => typeof value === "number"],
            ["accountId", value => typeof value === "number"],
            ["day", value => typeof value === "number"],
            ["month", value => typeof value === "number"],
            ["stage", value => Object.values(EnumStageRepeat).includes(value)],
            ["finish", value => typeof value === "boolean"],
            ["accountId", value => typeof value === "number"]
        ]);

        return Array.from(validators.entries()).every(([key, validate]) => validate(this.body[key]));
    }
}
