import { BankDTO } from "@dtos/BankDTO";

export interface BankInterface {
    createNewBankAccount(bank: BankDTO): Promise<any>;
}
