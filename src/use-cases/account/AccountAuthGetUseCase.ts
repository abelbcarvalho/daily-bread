import { AccountInterfaceRepository } from "@interfaces/AccountInterfaceRepository";
import { AccountRepository } from "@repositories/AccountRepository";
import { AddapterAccountDTO } from "@utilities/dto-adapters/AdapterAccountDTO";

export class AccountAuthGetUseCase {
    private repository: AccountInterfaceRepository;

    constructor() {
        this.repository = new AccountRepository();
    }

    async execute(accountId: number): Promise<any> {
        const account = await this.repository.getAccountById(accountId);

        return await AddapterAccountDTO.adaptAccountDomainToModel(account, true);
    }
}
