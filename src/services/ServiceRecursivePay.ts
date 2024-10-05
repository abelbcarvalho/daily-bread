import { RecursivePaymentDTO } from "@dtos/RecursivePaymentDTO";
import { RecursivePayInteface } from "@interfaces/RecursivePayInterface";

export class ServiceRecursivePay implements RecursivePayInteface {
    constructor() { }

    async createNewRecursivePayment(recursivePay: RecursivePaymentDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async updateAnExistingRecursivePayment(recursivePay: RecursivePaymentDTO, recPayId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getAllRecursivePaymentsByAccountId(accountId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
