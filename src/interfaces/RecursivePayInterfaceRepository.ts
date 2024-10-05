import { RecursivePayment } from "@domain/RecursivePayment";

export interface RecursivePayIntefaceRepository {
    createNewRecursivePayment(recursivePay: RecursivePayment): Promise<any>;
    updateAnExistingRecursivePayment(recursivePay: RecursivePayment, recPayId: number): Promise<any>;
    getAllRecursivePaymentsByAccountId(accountId: number): Promise<any>;
}
