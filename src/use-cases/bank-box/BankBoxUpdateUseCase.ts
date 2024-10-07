import { BankBoxDTO } from "@dtos/BankBoxDTO";
import { BankBoxInterfaceRepository } from "@interfaces/BankBoxInterfaceRepository";
import { BankBoxRepository } from "@repositories/BankBoxRepository";

export class BankBoxUpdateUseCase {
    private respository: BankBoxInterfaceRepository;

    constructor() {
        this.respository = new BankBoxRepository();
    }

    async execute(bankBox: BankBoxDTO, idBankBox: number): Promise<any> { }
}
