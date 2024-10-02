import { BaseException } from "@exceptions/BaseException";
import { getAccountIdFromRequestBody } from "@utilities/data-getter/DataGetter";
import { Request, Response } from "express";

export class ControllerBank {
    constructor() {}

    async createNewBankAccount(response: Response, request: Request): Promise<any> {
        try {
            const accountId = await getAccountIdFromRequestBody(request);
        }
        catch (error) {
            const err = error as BaseException;
            return response.status(err.code).send({error: err.message})
        }
    }
}
