import { BankBoxDTO } from "@dtos/BankBoxDTO";
import { BankBoxInterfaceRepository } from "@interfaces/BankBoxInterfaceRepository";
import { BankBoxRepository } from "@repositories/BankBoxRepository";
import { AdapterBankBoxDTO } from "@utilities/dto-adapters/AdapterBankBoxDTO";

export class BankBoxCreateUseCase {
    private respository: BankBoxInterfaceRepository;

    constructor() {
        this.respository = new BankBoxRepository();
    }

    async execute(bankBox: BankBoxDTO): Promise<any> {
        const bankBoxDom = await AdapterBankBoxDTO.adaptBankBoxDTOToDomain(bankBox);

        const bankBoxResult = await this.respository.createNewBankBox(bankBoxDom);

        return await AdapterBankBoxDTO.adaptBankBoxDomainToModel(bankBoxResult);
    }
}
