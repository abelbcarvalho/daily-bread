import { AccountLoginDTO } from "@dtos/AccountLoginDTO";
import { AccountInterfaceRepository } from "@interfaces/AccountInterfaceRepository";
import { Account } from "@models/Account";
import { AccountRepository } from "@repositories/AccountRepository";
import { AddapterAccountDTO } from "@utilities/dto-adapters/AdapterAccountDTO";

export class AccountLoginUseCase {
    private repository: AccountInterfaceRepository;

    constructor() {
        this.repository = new AccountRepository();
    }

    async execute(accountLogin: AccountLoginDTO): Promise<Account> {
        const existingAccount = await this.repository.makeLoginExistingAccount(accountLogin);

        return await AddapterAccountDTO.adaptAccountDomainToModel(existingAccount, false);
    }
}
