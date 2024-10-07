import { BankBoxDTO } from "@dtos/BankBoxDTO";
import { BankBoxInterface } from "@interfaces/BankBoxInterface";

export class ServiceBankBox implements BankBoxInterface {
    constructor() { }

    async createNewBankBox(bankBox: BankBoxDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async updateAnExistingBankBox(bankBox: BankBoxDTO, bankBoxId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getAllBankBoxByBankId(bankId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
