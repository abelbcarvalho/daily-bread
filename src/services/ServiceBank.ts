import { BankDTO } from "@dtos/BankDTO";
import { BankInterface } from "@interfaces/BankInterface";
import { BankCreateUseCase } from "@use-cases/bank/BankCreateUseCase";

export class ServiceBank implements BankInterface {
    private create: BankCreateUseCase;

    constructor() {
        this.create = new BankCreateUseCase();
    }

    async createNewBankAccount(bank: BankDTO): Promise<any> {
        return await this.create.execute(bank);
    }
}