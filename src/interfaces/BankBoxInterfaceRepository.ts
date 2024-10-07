import { BankBox } from "@domain/BankBox";

export interface BankBoxInterfaceRepository {
    createNewBankBox(bankBox: BankBox): Promise<any>;
    updateAnExistingBankBox(bankBox: BankBox, bankBoxId: number): Promise<any>;
    getAllBankBoxByBankId(bankId: number): Promise<any>;
}
