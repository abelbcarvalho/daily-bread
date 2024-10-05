import { RecursivePayInteface } from "@interfaces/RecursivePayInterface";
import { ServiceRecursivePay } from "@services/ServiceRecursivePay";
import { Request, Response } from "express";

export class ControllerRecursivePay {
    private service: RecursivePayInteface;

    constructor() {
        this.service = new ServiceRecursivePay();
    }

    async createNewRecursivePayment(response: Response, request: Request): Promise<any> { }

    async updateAnExistingRecursivePayment(response: Response, request: Request): Promise<any> { }

    async getAllRecursivePaymentsByAccountId(response: Response, request: Request): Promise<any> { }
}
