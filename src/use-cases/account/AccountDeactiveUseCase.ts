import { AccountInterfaceRepository } from "@interfaces/AccountInterfaceRepository";
import { AccountRepository } from "@repositories/AccountRepository";
import { AddapterAccountDTO } from "@utilities/dto-adapters/AdapterAccountDTO";

export class AccountDeactiveUseCase {
    private repository: AccountInterfaceRepository;

    constructor() {
        this.repository = new AccountRepository();
    }

    async execute(accountId: number): Promise<any> {
        const account = await this.repository.deactiveExistingAccount(accountId);

        const response = await AddapterAccountDTO.adaptAccountDomainToModel(account);

        return `account id ${response.id} was deactived with active ${response.active}`;
    }
}
