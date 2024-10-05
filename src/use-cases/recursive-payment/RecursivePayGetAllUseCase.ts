import { RecursivePayIntefaceRepository } from "@interfaces/RecursivePayInterfaceRepository";
import { RecursivePayRepository } from "@repositories/RecursivePayRepository";

export class RecursivePayGetAllUseCase {
    private repository: RecursivePayIntefaceRepository;

    constructor() {
        this.repository = new RecursivePayRepository();
    }

    async execute(accountId: number): Promise<any> {
        return await this.repository.getAllRecursivePaymentsByAccountId(accountId);
    }
}
