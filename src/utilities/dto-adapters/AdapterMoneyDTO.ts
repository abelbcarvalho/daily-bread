import { Request } from "express";
import { MoneyDTO } from "@dtos/MoneyDTO";
import { BodyException } from "@exceptions/BodyException";
import { AdaptperFusion } from "./AdapterFusion";
import { Money as MoneyModel } from "@models/Money";
import { Money as MoneyDomain } from "@domain/Money";

export class AdapterMoneyDTO {
    private body: any;

    constructor(request: Request) {
        this.body = request.body === null ? null : request.body;
    }

    private async isBodyNull(): Promise<void> {
        if (this.body === null) {
            throw new BodyException("request body can't be null");
        }

        this.body = this.body as MoneyDTO;
    }

    static async adapterMoneyDTOToDomain(money: MoneyDTO): Promise<MoneyDomain> {
        const keys = ["descript", "balance", "accountId"];

        const domain = await AdaptperFusion.fusionDataObjectRestrictDefined<Array<string>, Object, MoneyDomain>(
            keys,
            money
        );

        return domain;
    }

    static async adapterMoneyDomainToModel(money: any): Promise<MoneyModel> {
        const keys = await AdaptperFusion.getDTOKeys<MoneyModel>(new MoneyModel());

        const domain = await AdaptperFusion.fusionDataObjectRestrictDefined<Array<string>, Object, MoneyModel>(
            keys,
            money
        );

        return domain;
    }

    async adapterMoneyDTO(): Promise<MoneyDTO> {
        await this.isBodyNull();

        const keys = await AdaptperFusion.getDTOKeys<MoneyModel>(new MoneyModel());

        this.body = await AdaptperFusion.fusionDataObjectRestrictDefined<Array<string>, Object, MoneyDTO>(
            keys,
            this.body
        );

        const validator = await this.checkObject();

        if (!validator) {
            throw new BodyException("body is invalid for bank update body");
        }

        return this.body;
    }

    private async checkObject(): Promise<boolean> {
        const validators = new Map<string, (value: any) => boolean>([
            ["descript", value => typeof value === "undefined" || typeof value == "string"],
            ["balance", value => typeof value === "number"],
            ["accountId", value => typeof value === "number"]
        ]);

        return Array.from(validators.entries()).every(([key, validate]) => validate(this.body[key]));
    }
}
