import { BaseException } from "@exceptions/BaseException";
import { RecursivePayInteface } from "@interfaces/RecursivePayInterface";
import { ServiceRecursivePay } from "@services/ServiceRecursivePay";
import { getAccountIdFromRequestBody } from "@utilities/data-getter/DataGetter";
import { AdapterRecursivePaymentDTO } from "@utilities/dto-adapters/AdapterRecursivePaymentDTO";
import { AdapterRequestParam } from "@utilities/dto-adapters/AdapterRequestParam";
import { Request, Response } from "express";

export class ControllerRecursivePay {
    private service: RecursivePayInteface;

    constructor() {
        this.service = new ServiceRecursivePay();
    }

    async createNewRecursivePayment(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);

            const adapter = new AdapterRecursivePaymentDTO(request);
            const recursivePay = await adapter.adapterRecursivePayDTO();

            recursivePay.accountId = accountId;
            request.body = {};

            const newRecursivePay = await this.service.createNewRecursivePayment(recursivePay);

            return response.status(200).send(newRecursivePay);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }

    async updateAnExistingRecursivePayment(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);

            const adapter = new AdapterRequestParam(request);

            const recurPayId = await adapter.getParamID();

            const adaptMoney = new AdapterRecursivePaymentDTO(request);
            const recursivePay = await adaptMoney.adapterRecursivePayDTO();
            recursivePay.accountId = accountId;

            request.body = {};

            const moneyCash = await this.service.updateAnExistingRecursivePayment(recursivePay, recurPayId);

            return response.status(200).send(moneyCash);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }

    async getAllRecursivePaymentsByAccountId(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);
            request.body = {}

            const allRecursivePays = await this.service.getAllRecursivePaymentsByAccountId(accountId);

            const status = allRecursivePays.length > 0 ? 200 : 404;

            return response.status(status).send({ moneyCash: allRecursivePays });
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }
}
