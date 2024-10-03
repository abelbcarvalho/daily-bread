import { BankDTO } from "@dtos/BankDTO";
import { BankInterface } from "@interfaces/BankInterface";
import { BankCreateUseCase } from "@use-cases/bank/BankCreateUseCase";
import {
    checkBankAgency,
    checkBankNumberAccount,
    checkCodeBank,
    checkVariationBankAccount,
} from "@utilities/checkers/BankChecker"; 

export class ServiceBank implements BankInterface {
    private create: BankCreateUseCase;

    constructor() {
        this.create = new BankCreateUseCase();
    }

    async createNewBankAccount(bank: BankDTO): Promise<any> {
        await checkCodeBank(bank.code);
        await checkBankAgency(bank.agency);
        await checkBankNumberAccount(bank.numberAcc);
        await checkVariationBankAccount(bank.variation);

        return await this.create.execute(bank);
    }
}
