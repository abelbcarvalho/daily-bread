import { RecursivePaymentDTO } from "@dtos/RecursivePaymentDTO";
import { AdapterRecursivePaymentDTO } from "@utilities/dto-adapters/AdapterRecursivePaymentDTO";

export class RecursivePayCreateUseCase {
    constructor() { }

    async execute(recursivePay: RecursivePaymentDTO): Promise<any> {
        const payModel = await AdapterRecursivePaymentDTO.adapterRecursivePayDTOToDomain(recursivePay);
    }
}
