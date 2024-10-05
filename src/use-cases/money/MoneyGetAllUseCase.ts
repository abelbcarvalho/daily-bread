import { MoneyInterfaceRepository } from "@interfaces/MoneyInterfaceRepository";
import { MoneyRepository } from "@repositories/MoneyRepository";

export class MoneyGetAllUseCase {
    private repository: MoneyInterfaceRepository;

    constructor() {
        this.repository = new MoneyRepository();
    }

    async execute(accountId: number): Promise<any> {
        return await this.repository.getAllMoneyByAccountId(accountId);
    }
}
