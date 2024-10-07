import { BankBoxDTO } from "@dtos/BankBoxDTO";

export interface BankBoxInterface {
    createNewBankBox(bankBox: BankBoxDTO): Promise<any>;
    updateAnExistingBankBox(bankBox: BankBoxDTO, bankBoxId: number): Promise<any>;
    getAllBankBoxByBankId(bankId: number): Promise<any>;
}
