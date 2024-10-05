import { RecursivePaymentDTO } from "@dtos/RecursivePaymentDTO";
import { RecursivePayIntefaceRepository } from "@interfaces/RecursivePayInterfaceRepository";
import { RecursivePayRepository } from "@repositories/RecursivePayRepository";
import { AdapterRecursivePaymentDTO } from "@utilities/dto-adapters/AdapterRecursivePaymentDTO";

export class RecursivePayUpdateUseCase {
    private repository: RecursivePayIntefaceRepository;

    constructor() {
        this.repository = new RecursivePayRepository();
    }

    async execute(recursivePay: RecursivePaymentDTO, recurPayId: number): Promise<any> {
        const payModel = await AdapterRecursivePaymentDTO.adapterRecursivePayDTOToDomain(recursivePay);

        const response = await this.repository.updateAnExistingRecursivePayment(payModel, recurPayId);

        return await AdapterRecursivePaymentDTO.adapterRecursivePayDomainToModel(response);
    }
}
