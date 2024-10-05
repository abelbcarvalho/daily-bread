import { BaseException } from "@exceptions/BaseException";
import { BankInterface } from "@interfaces/BankInterface";
import { ServiceBank } from "@services/ServiceBank";
import { getAccountIdFromRequestBody } from "@utilities/data-getter/DataGetter";
import { AdapterBankDTO } from "@utilities/dto-adapters/AdapterBankDTO";
import { AdapterRequestParam } from "@utilities/dto-adapters/AdapterRequestParam";
import { Request, Response } from "express";

export class ControllerBank {
    private service: BankInterface;

    constructor() {
        this.service = new ServiceBank();
    }

    async createNewBankAccount(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);

            request.body = {};

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
            const adapter = new AdapterRequestParam(request);

            const bankId = await adapter.getParamID();

            const adapterDTO = new AdapterBankDTO(request);

            const bank = await adapterDTO.adapterBankUpdateDTO();

            const updated = await this.service.updateExistingBankAccount(bank, bankId);

            return response.status(200).send(updated);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }

    async getAllBankAccountFromAnUser(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);

            request.body = {};

            const banks = await this.service.getAllBankAccountFromAnUser(accountId);

            return response.status(200).send({ allBanks: banks });
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message })
        }
    }
}
