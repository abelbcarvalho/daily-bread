import { BankUpdateDTO } from "@dtos/BankUpdateDTO";
import { BaseException } from "@exceptions/BaseException";
import { BankInterface } from "@interfaces/BankInterface";
import { ServiceBank } from "@services/ServiceBank";
import { getAccountIdFromRequestBody } from "@utilities/data-getter/DataGetter";
import { AdapterBankDTO } from "@utilities/dto-adapters/AdapterBankDTO";
import { AdaptperFusion } from "@utilities/dto-adapters/AdapterFusion";
import { AdapterRequestParam } from "@utilities/dto-adapters/AdapterRequestParam";
import { Request, Response } from "express";
import { Bank } from "@models/Bank";

export class ControllerBank {
    private service: BankInterface;
    private chaves: any;

    constructor() {
        this.service = new ServiceBank();
    }

    private async getObjectKeys(): Promise<void> {
        if (!this.chaves) {
            this.chaves = await AdaptperFusion.getDTOKeys<BankUpdateDTO>(new Bank());
        }
    }

    async createNewBankAccount(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);

            const adapter = new AdapterBankDTO(request);

            const bank = await adapter.adapterBankDTO();
            bank.accountId = accountId;

            const newBank = await this.service.createNewBankAccount(bank);

            return response.status(200).send(newBank);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message })
        }
    }

    async updateExistingBankAccount(response: Response, request: Request): Promise<any> {
        try {
            await this.getObjectKeys();

            const adapter = new AdapterRequestParam(request);

            const bankId = await adapter.getParamID();

            const bank = await AdaptperFusion.fusionDataObjectRestrictDefined<Array<string>, Object, BankUpdateDTO>(
                this.chaves,
                request.body
            );

            return response.status(200).send(bank);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }
}
