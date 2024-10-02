import { AccountDTO } from "@dtos/AccountDTO";
import { AccountLoginDTO } from "@dtos/AccountLoginDTO";

export interface AccountInterface {
    createNewAccount(account: AccountDTO): Promise<any>;
    makeLoginExistingAccount(accountLogin: AccountLoginDTO): Promise<any>;
    deactiveExistingAccount(accountId: number): Promise<any>;
    getAccountById(accountId: number): Promise<any>;
}
