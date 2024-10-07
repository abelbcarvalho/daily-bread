import { BaseException } from "@exceptions/BaseException";
import { BankBoxInterface } from "@interfaces/BankBoxInterface";
import { ServiceBankBox } from "@services/ServiceBankBox";
import { Request, Response } from "express";

export class ControllerBankBox {
    private service: BankBoxInterface;

    constructor() {
        this.service = new ServiceBankBox();
    }

    async createNewBankBox(response: Response, request: Request): Promise<any> {
        try {
            const bankBox = request.body;

            const result = await this.service.createNewBankBox(bankBox);

            return response.status(200).send(result);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }

    async updateAnExistingBankBox(response: Response, request: Request): Promise<any> {
        try {
            const bankBox = request.body;
            const bankBoxId = parseInt(request.params["id"]);

            const result = await this.service.updateAnExistingBankBox(bankBox, bankBoxId);

            return response.status(200).send(result);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }

    async getAllBankBoxByBankId(response: Response, request: Request): Promise<any> {
        try {
            const bankId = parseInt(request.params["bankId"]);

            const result = await this.service.getAllBankBoxByBankId(bankId);

            const status = result.length > 0 ? 200 : 404;

            return response.status(status).send(result);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({ error: err.message });
        }
    }
}
