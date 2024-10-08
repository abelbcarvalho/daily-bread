import { BankDTO } from "@dtos/BankDTO";
import { BankUpdateDTO } from "@dtos/BankUpdateDTO";
import { BankInterface } from "@interfaces/BankInterface";
import { BankCreateUseCase } from "@use-cases/bank/BankCreateUseCase";
import { BankGetAllUseCase } from "@use-cases/bank/BankGetAllUseCase";
import { BankUpdateUseCase } from "@use-cases/bank/BankUpdateUseCase";
import {
    checkBankAgency,
    checkBankNumberAccount,
    checkCodeBank,
    checkVariationBankAccount,
} from "@utilities/checkers/BankChecker";

export class ServiceBank implements BankInterface {
    private create: BankCreateUseCase;
    private update: BankUpdateUseCase;
    private getAll: BankGetAllUseCase;

    constructor() {
        this.create = new BankCreateUseCase();
        this.update = new BankUpdateUseCase();
        this.getAll = new BankGetAllUseCase();
    }

    async createNewBankAccount(bank: BankDTO): Promise<any> {
        await checkCodeBank(bank.code);
        await checkBankAgency(bank.agency);
        await checkBankNumberAccount(bank.numberAcc);
        await checkVariationBankAccount(bank.variation);

        return await this.create.execute(bank);
    }

    async updateExistingBankAccount(bank: BankUpdateDTO, bankId: number): Promise<any> {
        if (bank.code) await checkCodeBank(bank.code);

        if (bank.agency) await checkBankAgency(bank.agency);

        if (bank.numberAcc) await checkBankNumberAccount(bank.numberAcc);

        if (bank.variation) await checkVariationBankAccount(bank.variation);

        return await this.update.execute(bank, bankId);
    }

    async getAllBankAccountFromAnUser(accountId: number): Promise<any> {
        return await this.getAll.execute(accountId);
    }
}
