import { BankDTO } from "@dtos/BankDTO";
import { BankInterfaceRepository } from "@interfaces/BankInterfaceRepository";
import { BankRepository } from "@repositories/BankRepository";
import { AdapterBankDTO } from "@utilities/dto-adapters/AdapterBankDTO";

export class BankCreateUseCase {
    private repository: BankInterfaceRepository;

    constructor() {
        this.repository = new BankRepository();
    }

    async execute(bank: BankDTO): Promise<any> {
        const bankDomain = await AdapterBankDTO.adaptBankDTOToDomain(bank);

        const bankResult = await this.repository.createNewBankAccount(bankDomain);

        return await AdapterBankDTO.adaptBankDomainToModel(bankResult);
    }
}
