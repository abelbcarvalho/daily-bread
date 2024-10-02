import { BaseException } from "@exceptions/BaseException";
import { getAccountIdFromRequestBody } from "@utilities/data-getter/DataGetter";
import { AdapterBankDTO } from "@utilities/dto-adapters/AdapterBankDTO";
import { Request, Response } from "express";

export class ControllerBank {
    constructor() {}

    async createNewBankAccount(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);

            const adapter = new AdapterBankDTO(request);

            const bank = await adapter.adapterBankDTO();
            bank.accountId = accountId;

            return response.status(200).send(bank);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({error: err.message})
        }
    }
}
