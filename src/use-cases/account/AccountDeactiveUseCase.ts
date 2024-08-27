import { AccountInterfaceRepository } from "@interfaces/AccountInterfaceRepository";
import { AccountRepository } from "@repositories/AccountRepository";

export class AccountDeactiveUseCase {
    private repository: AccountInterfaceRepository;

    constructor() {
        this.repository = new AccountRepository();
    }

    async execute(accountId: number): Promise<any> {
        return await this.repository.deactiveExistingAccount(accountId);
    }
}
