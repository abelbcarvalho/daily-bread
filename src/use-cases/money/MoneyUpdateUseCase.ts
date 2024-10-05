import { MoneyDTO } from "@dtos/MoneyDTO";
import { MoneyInterfaceRepository } from "@interfaces/MoneyInterfaceRepository";
import { MoneyRepository } from "@repositories/MoneyRepository";
import { AdapterMoneyDTO } from "@utilities/dto-adapters/AdapterMoneyDTO";

export class MoneyUpdateUseCase {
    private repository: MoneyInterfaceRepository;

    constructor() {
        this.repository = new MoneyRepository();
    }

    async execute(money: MoneyDTO, moneyId: number): Promise<any> {
        const moneyDomain = await AdapterMoneyDTO.adapterMoneyDTOToDomain(money);

        const moneyResult = await this.repository.updateExistingMoneyRegistry(money, moneyId);

        return await AdapterMoneyDTO.adapterMoneyDomainToModel(moneyResult);
    }
}
