import { Account as AccountDomain } from "@domain/Account";
import { AccountLoginDTO } from "@dtos/AccountLoginDTO";

export interface AccountInterfaceRepository {
    createNewAccount(account: AccountDomain): Promise<any>;
    makeLoginExistingAccount(accountLogin: AccountLoginDTO): Promise<any>;
    deactiveExistingAccount(accountId: number): Promise<any>;
}
