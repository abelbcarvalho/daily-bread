import { Bank } from "@domain/Bank";
import { BankUpdateDTO } from "@dtos/BankUpdateDTO";

export interface BankInterfaceRepository {
    createNewBankAccount(bank: Bank): Promise<any>;
    updateExistingBankAccount(bank: BankUpdateDTO, bankId: number): Promise<any>;
}
