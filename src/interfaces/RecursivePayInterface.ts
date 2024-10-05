import { RecursivePaymentDTO } from "@dtos/RecursivePaymentDTO";

export interface RecursivePayInteface {
    createNewRecursivePayment(recursivePay: RecursivePaymentDTO): Promise<any>;
    updateAnExistingRecursivePayment(recursivePay: RecursivePaymentDTO, recPayId: number): Promise<any>;
    getAllRecursivePaymentsByAccountId(accountId: number): Promise<any>;
}
