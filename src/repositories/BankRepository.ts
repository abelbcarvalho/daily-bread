import { Bank } from "@domain/Bank";
import { BankInterfaceRepository } from "@interfaces/BankInterfaceRepository";

export class BankRepository implements BankInterfaceRepository {
    async createNewBankAccount(bank: Bank): Promise<any> {
        throw new Error("Method not implemented.");
    }
}