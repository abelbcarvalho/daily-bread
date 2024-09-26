import { AddapterAccountDTO } from "@utilities/dto-adapters/AdapterAccountDTO";
import { AddapterAccountLoginDTO } from "@utilities/dto-adapters/AdapterAccountLoginDTO";
import { AdapterRequestParam } from "@utilities/dto-adapters/AdapterRequestParam";
import { ServiceAccount } from "@services/ServiceAccount";
import { AccountInterface } from "@interfaces/AccountInterface";
import { Request, Response } from "express";
import { BaseException } from "@exceptions/BaseException";

export class ControllerAccount {
    private service: AccountInterface;

    constructor() {
        this.service = new ServiceAccount();
    }

    async createNewAccount(response: Response, request: Request): Promise<any> {
        try {
            const adapter = new AddapterAccountDTO(request);

            const account = await adapter.adapterAccountDTO();

            const result = await this.service.createNewAccount(account);

            return response.status(200).send(result);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({error: err.message});
        }
    }

    async makeLoginExistingAccount(response: Response, request: Request): Promise<any> {
        const adapter = new AddapterAccountLoginDTO(request);

        const loginAccount = await adapter.adapterAccountLoginDTO();

        return await this.service.makeLoginExistingAccount(loginAccount);
    }

    async deactiveExistingAccount(response: Response, request: Request): Promise<any> {
        const adapter = new AdapterRequestParam(request);

        const accountId = await adapter.getParamID();

        return await this.service.deactiveExistingAccount(accountId);
    }
}
