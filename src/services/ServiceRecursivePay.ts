import { RecursivePaymentDTO } from "@dtos/RecursivePaymentDTO";
import { RecursivePayInteface } from "@interfaces/RecursivePayInterface";
import { RecursivePayCreateUseCase } from "@use-cases/recursive-payment/RecursivePayCreateUseCase";
import { RecursivePayGetAllUseCase } from "@use-cases/recursive-payment/RecursivePayGetAllUseCase";
import { RecursivePayUpdateUseCase } from "@use-cases/recursive-payment/RecursivePayUpdateUseCase";
import { recursivePayChecker, recursivePayCheckerUpdate } from "@utilities/checkers/RecursivePayChecker";

export class ServiceRecursivePay implements RecursivePayInteface {
    private create: RecursivePayCreateUseCase;
    private update: RecursivePayUpdateUseCase;
    private getAll: RecursivePayGetAllUseCase;

    constructor() {
        this.create = new RecursivePayCreateUseCase();
        this.update = new RecursivePayUpdateUseCase();
        this.getAll = new RecursivePayGetAllUseCase();
    }

    async createNewRecursivePayment(recursivePay: RecursivePaymentDTO): Promise<any> {
        await recursivePayChecker(recursivePay);

        return await this.create.execute(recursivePay);
    }

    async updateAnExistingRecursivePayment(recursivePay: RecursivePaymentDTO, recPayId: number): Promise<any> {
        await recursivePayCheckerUpdate(recursivePay);

        return await this.update.execute(recursivePay, recPayId);
    }

    async getAllRecursivePaymentsByAccountId(accountId: number): Promise<any> {
        return await this.getAll.execute(accountId);
    }
}
