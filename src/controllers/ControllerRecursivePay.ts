import { Request, Response } from "express";

export class ControllerRecursivePay {
    constructor() { }

    async createNewRecursivePayment(response: Response, request: Request): Promise<any> { }

    async updateAnExistingRecursivePayment(response: Response, request: Request): Promise<any> { }

    async getAllRecursivePaymentsByAccountId(response: Response, request: Request): Promise<any> { }
}
