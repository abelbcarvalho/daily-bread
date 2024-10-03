import { AddapterAccountDTO } from "@utilities/dto-adapters/AdapterAccountDTO";
import { AddapterAccountLoginDTO } from "@utilities/dto-adapters/AdapterAccountLoginDTO";
import { AdapterRequestParam } from "@utilities/dto-adapters/AdapterRequestParam";
import { ServiceAccount } from "@services/ServiceAccount";
import { AccountInterface } from "@interfaces/AccountInterface";
import { Request, Response } from "express";
import { BaseException } from "@exceptions/BaseException";
import { generateToken } from "@middlewares/AuthMiddleware";
import { getAccountIdFromRequestBody } from "@utilities/data-getter/DataGetter";

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
            return response.status(err.code).send({ error: err.message });
        }
    }

    async makeLoginExistingAccount(response: Response, request: Request): Promise<any> {
        try {
            const adapter = new AddapterAccountLoginDTO(request);

            const loginAccount = await adapter.adapterAccountLoginDTO();

            const loggedAccount = await this.service.makeLoginExistingAccount(loginAccount);

            const authToken = await generateToken({ account_id: loggedAccount.id });

            return response.status(200).send({
                message: "success to login, welcome!",
                token: authToken
            });
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message })
        }
    }

    async deactiveExistingAccount(response: Response, request: Request): Promise<any> {
        try {
            const adapter = new AdapterRequestParam(request);

            const accountId = await adapter.getParamID();

            const result = await this.service.deactiveExistingAccount(accountId);

            return response.status(200).send({ message: result });
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }

    async getAccountById(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);

            const account = await this.service.getAccountById(accountId);

            return response.status(200).send(account);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }
}
