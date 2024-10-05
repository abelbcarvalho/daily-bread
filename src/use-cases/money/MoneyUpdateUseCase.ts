import { MoneyDTO } from "@dtos/MoneyDTO";
import { MoneyInterfaceRepository } from "@interfaces/MoneyInterfaceRepository";
import { MoneyRepository } from "@repositories/MoneyRepository";

export class MoneyUpdateUseCase {
    private repository: MoneyInterfaceRepository;

    constructor() {
        this.repository = new MoneyRepository();
    }

    async execute(money: MoneyDTO, moneyId: number): Promise<any> {
        return await this.repository.updateExistingMoneyRegistry(money, moneyId);
    }
}
