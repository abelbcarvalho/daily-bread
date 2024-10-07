import { BankBoxInterfaceRepository } from "@interfaces/BankBoxInterfaceRepository";
import { BankBoxRepository } from "@repositories/BankBoxRepository";

export class BankBoxGetAllUseCase {
    private respository: BankBoxInterfaceRepository;

    constructor() {
        this.respository = new BankBoxRepository();
    }

    async execute(bankId: number): Promise<any> { }
}
