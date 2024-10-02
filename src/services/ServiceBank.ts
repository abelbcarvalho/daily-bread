import { BankDTO } from "@dtos/BankDTO";
import { BankInterface } from "@interfaces/BankInterface";

export class ServiceBank implements BankInterface {
    async createNewBankAccount(bank: BankDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
}