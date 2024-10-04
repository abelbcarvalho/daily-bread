import { BankDTO } from "@dtos/BankDTO";
import { BankUpdateDTO } from "@dtos/BankUpdateDTO";

export interface BankInterface {
    createNewBankAccount(bank: BankDTO): Promise<any>;
    updateExistingBankAccount(bank: BankUpdateDTO, bankId: number): Promise<any>;
    getAllBankAccountFromAnUser(accountId: number): Promise<any>;
}
