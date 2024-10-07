import { BankBoxInterface } from "@interfaces/BankBoxInterface";
import { ServiceBankBox } from "@services/ServiceBankBox";
import { Request, Response } from "express";

export class ControllerBankBox {
    private service: BankBoxInterface;

    constructor() {
        this.service = new ServiceBankBox();
    }

    async createNewBankBox(response: Response, request: Request): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async updateAnExistingBankBox(response: Response, request: Request): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getAllBankBoxByBankId(response: Response, request: Request): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
