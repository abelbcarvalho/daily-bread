import { Bank } from "@domain/Bank";

export interface BankInterfaceRepository {
    createNewBankAccount(bank: Bank): Promise<any>;
}
