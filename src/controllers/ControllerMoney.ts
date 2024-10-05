import { Request, Response } from "express";

export class ControllerMoney {
    async createNewMoneyRegistry(response: Response, request: Request): Promise<any> { }

    async updateExistingMoneyRegistry(response: Response, request: Request): Promise<any> { }

    async getAllMoneyByAccountId(response: Response, request: Request): Promise<Array<any>> {
        return [];
    }
}
