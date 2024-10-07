import { BankBoxDTO } from "@dtos/BankBoxDTO";
import { BankBoxInterfaceRepository } from "@interfaces/BankBoxInterfaceRepository";
import { BankBoxRepository } from "@repositories/BankBoxRepository";

export class BankBoxCreateUseCase {
    private respository: BankBoxInterfaceRepository;

    constructor() {
        this.respository = new BankBoxRepository();
    }

    async execute(bankBox: BankBoxDTO): Promise<any> { }
}
