import { MoneyDTO } from "@dtos/MoneyDTO";
import { MoneyInterface } from "@interfaces/MoneyInterface";
import { MoneyCreateUseCase } from "@use-cases/money/MoneyCreateUseCase";
import { MoneyGetAllUseCase } from "@use-cases/money/MoneyGetAllUseCase";
import { MoneyUpdateUseCase } from "@use-cases/money/MoneyUpdateUseCase";

export class ServiceMoney implements MoneyInterface {
    private create: MoneyCreateUseCase;
    private update: MoneyUpdateUseCase;
    private getAll: MoneyGetAllUseCase;

    constructor() {
        this.create = new MoneyCreateUseCase();
        this.update = new MoneyUpdateUseCase();
        this.getAll = new MoneyGetAllUseCase();
    }

    async createNewMoneyRegistry(money: MoneyDTO): Promise<any> {
        return await this.create.execute(money);
    }

    async updateExistingMoneyRegistry(money: MoneyDTO, moneyId: number): Promise<any> {
        return await this.update.execute(money, moneyId);
    }

    async getAllMoneyByAccountId(accountId: number): Promise<Array<any>> {
        return await this.getAll.execute(accountId);
    }
}
