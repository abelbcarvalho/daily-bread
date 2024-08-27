import { AccountDTO } from "@dtos/AccountDTO";
import { AddapterAccountDTO } from "@utilities/dto-adapters/AdapterAccountDTO";
import { AccountInterfaceRepository } from "@interfaces/AccountInterfaceRepository";
import { AccountRepository } from "@repositories/AccountRepository";

export class AccountCreateUseCase {
    private repository: AccountInterfaceRepository;

    constructor() {
        this.repository = new AccountRepository();
    }

    async execute(account: AccountDTO): Promise<any> {
        const accountCreate = await AddapterAccountDTO.adaptAccountDTOToDomain(account);

        const newAccount = await this.repository.createNewAccount(accountCreate);

        return await AddapterAccountDTO.adaptAccountDomainToModel(newAccount);
    }
}
