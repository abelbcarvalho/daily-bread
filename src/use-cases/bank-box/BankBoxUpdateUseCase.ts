import { BankBoxDTO } from "@dtos/BankBoxDTO";
import { BankBoxInterfaceRepository } from "@interfaces/BankBoxInterfaceRepository";
import { BankBoxRepository } from "@repositories/BankBoxRepository";
import { AdapterBankBoxDTO } from "@utilities/dto-adapters/AdapterBankBoxDTO";

export class BankBoxUpdateUseCase {
    private respository: BankBoxInterfaceRepository;

    constructor() {
        this.respository = new BankBoxRepository();
    }

    async execute(bankBox: BankBoxDTO, idBankBox: number): Promise<any> {
        const response = await this.respository.updateAnExistingBankBox(bankBox, idBankBox);

        const updatedBankBox = await AdapterBankBoxDTO.adaptBankBoxDomainToModel(response);

        return updatedBankBox;
    }
}
