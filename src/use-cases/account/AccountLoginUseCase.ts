import { AccountLoginDTO } from "@dtos/AccountLoginDTO";
import { AccountInterfaceRepository } from "@interfaces/AccountInterfaceRepository";
import { AccountRepository } from "@repositories/AccountRepository";
import { AddapterAccountDTO } from "@utilities/dto-adapters/AdapterAccountDTO";

export class AccountLoginUseCase {
    private repository: AccountInterfaceRepository;

    constructor() {
        this.repository = new AccountRepository();
    }

    async execute(accountLogin: AccountLoginDTO): Promise<any> {
        const existingAccount = await this.repository.makeLoginExistingAccount(accountLogin);

        return await AddapterAccountDTO.adaptAccountDomainToModel(existingAccount);
    }
}
