import { RecursivePaymentDTO } from "@dtos/RecursivePaymentDTO";
import { AdapterRecursivePaymentDTO } from "@utilities/dto-adapters/AdapterRecursivePaymentDTO";

export class RecursivePayUpdateUseCase {
    constructor() { }

    async execute(recursivePay: RecursivePaymentDTO, recurPayId: number): Promise<any> {
        const payModel = await AdapterRecursivePaymentDTO.adapterRecursivePayDTOToDomain(recursivePay);
    }
}
