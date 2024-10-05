import { Request, Response } from "express";
import { BaseException } from "@exceptions/BaseException";
import { MoneyInterface } from "@interfaces/MoneyInterface";
import { ServiceMoney } from "@services/ServiceMoney";
import { getAccountIdFromRequestBody } from "@utilities/data-getter/DataGetter";
import { AdapterMoneyDTO } from "@utilities/dto-adapters/AdapterMoneyDTO";
import { AdapterRequestParam } from "@utilities/dto-adapters/AdapterRequestParam";

export class ControllerMoney {
    private service: MoneyInterface;

    constructor() {
        this.service = new ServiceMoney();
    }

    async createNewMoneyRegistry(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);

            const adapter = new AdapterMoneyDTO(request);
            const money = await adapter.adapterMoneyDTO();

            money.accountId = accountId;
            request.body = {};

            const moneyCash = await this.service.createNewMoneyRegistry(money);

            return response.status(200).send(moneyCash);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }

    async updateExistingMoneyRegistry(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);

            const adapter = new AdapterRequestParam(request);

            const moneyId = await adapter.getParamID();

            const adaptMoney = new AdapterMoneyDTO(request);
            const money = await adaptMoney.adapterMoneyDTO();
            money.accountId = accountId;

            request.body = {};

            const moneyCash = await this.service.updateExistingMoneyRegistry(money, moneyId);

            return response.status(200).send(moneyCash);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }

    async getAllMoneyByAccountId(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);
            request.body = {}

            const allMoneyCash = await this.service.getAllMoneyByAccountId(accountId);

            const status = allMoneyCash.length > 0 ? 200 : 404;

            return response.status(status).send({ moneyCash: allMoneyCash });
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }
}
