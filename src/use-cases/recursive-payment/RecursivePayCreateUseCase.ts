import { RecursivePaymentDTO } from "@dtos/RecursivePaymentDTO";
import { RecursivePayIntefaceRepository } from "@interfaces/RecursivePayInterfaceRepository";
import { RecursivePayRepository } from "@repositories/RecursivePayRepository";
import { AdapterRecursivePaymentDTO } from "@utilities/dto-adapters/AdapterRecursivePaymentDTO";

export class RecursivePayCreateUseCase {
    private repository: RecursivePayIntefaceRepository;

    constructor() {
        this.repository = new RecursivePayRepository();
    }

    async execute(recursivePay: RecursivePaymentDTO): Promise<any> {
        const payModel = await AdapterRecursivePaymentDTO.adapterRecursivePayDTOToDomain(recursivePay);

        const response = await this.repository.createNewRecursivePayment(payModel);

        return await AdapterRecursivePaymentDTO.adapterRecursivePayDomainToModel(response);
    }
}
