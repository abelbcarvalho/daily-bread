import { BankBoxDTO } from "@dtos/BankBoxDTO";
import { BankBoxInterface } from "@interfaces/BankBoxInterface";
import { BankBoxCreateUseCase } from "@use-cases/bank-box/BankBoxCreateUseCase";
import { BankBoxGetAllUseCase } from "@use-cases/bank-box/BankBoxGetAllUseCase";
import { BankBoxUpdateUseCase } from "@use-cases/bank-box/BankBoxUpdateUseCase";

export class ServiceBankBox implements BankBoxInterface {
    private create: BankBoxCreateUseCase;
    private update: BankBoxUpdateUseCase;
    private getAll: BankBoxGetAllUseCase;

    constructor() {
        this.create = new BankBoxCreateUseCase();
        this.update = new BankBoxUpdateUseCase();
        this.getAll = new BankBoxGetAllUseCase();
    }

    async createNewBankBox(bankBox: BankBoxDTO): Promise<any> {
        return await this.create.execute(bankBox);
    }

    async updateAnExistingBankBox(bankBox: BankBoxDTO, bankBoxId: number): Promise<any> {
        return await this.update.execute(bankBox, bankBoxId);
    }

    async getAllBankBoxByBankId(bankId: number): Promise<any> {
        return await this.getAll.execute(bankId);
    }
}
