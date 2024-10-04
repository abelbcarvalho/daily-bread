import { BankUpdateDTO } from "@dtos/BankUpdateDTO";
import { BankInterfaceRepository } from "@interfaces/BankInterfaceRepository";
import { BankRepository } from "@repositories/BankRepository";
import { AdapterBankDTO } from "@utilities/dto-adapters/AdapterBankDTO";

export class BankUpdateUseCase {
    private repository: BankInterfaceRepository;

    constructor() {
        this.repository = new BankRepository();
    }

    async execute(bank: BankUpdateDTO, bankId: number) {
        const response = await this.repository.updateExistingBankAccount(bank, bankId);

        const updatedBank = await AdapterBankDTO.adaptBankDomainToModel(response);

        return updatedBank;
    }
}
