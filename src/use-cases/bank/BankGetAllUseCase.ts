import { BankInterfaceRepository } from "@interfaces/BankInterfaceRepository";
import { BankRepository } from "@repositories/BankRepository";

export class BankGetAllUseCase {
    private repository: BankInterfaceRepository;

    constructor() {
        this.repository = new BankRepository();
    }

    async execute(accountId: number): Promise<any> {
        const response = await this.repository.getAllBankAccountFromAnUser(accountId);

        return response;
    }
}
