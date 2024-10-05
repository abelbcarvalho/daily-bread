import { MoneyDTO } from "@dtos/MoneyDTO";
import { MoneyInterfaceRepository } from "@interfaces/MoneyInterfaceRepository";
import { MoneyRepository } from "@repositories/MoneyRepository";

export class MoneyCreateUseCase {
    private repository: MoneyInterfaceRepository;

    constructor() {
        this.repository = new MoneyRepository();
    }

    async execute(money: MoneyDTO): Promise<any> {
        return await this.repository.createNewMoneyRegistry(money);
    }
}
