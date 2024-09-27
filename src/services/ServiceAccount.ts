import { AccountDTO } from "@dtos/AccountDTO";
import { AccountLoginDTO } from "@dtos/AccountLoginDTO";
import { EnumLegalPerson } from "@enumerates/EnumLegalPerson";
import { LoginException } from "@exceptions/LoginException";
import { AccountInterface } from "@interfaces/AccountInterface";
import { AccountCreateUseCase } from "@use-cases/account/AccountCreateUseCase";
import { AccountDeactiveUseCase } from "@use-cases/account/AccountDeactiveUseCase";
import { AccountLoginUseCase } from "@use-cases/account/AccountLoginUseCase";
import { checkCnpj, checkCnpjDigits } from "@utilities/checkers/CnpjChecker";
import { checkCpf, checkCpfDigits } from "@utilities/checkers/CpfChecker";
import { checkEmail } from "@utilities/checkers/EmailChecker";
import { checkMobileNumber } from "@utilities/checkers/MobileChecker";
import { checkPassword } from "@utilities/checkers/PasswordChecker";
import { checkUsername } from "@utilities/checkers/UsernameChecker";
import { HashPassword } from "@utilities/security/HashPassword";

export class ServiceAccount implements AccountInterface {
    private create: AccountCreateUseCase;
    private login: AccountLoginUseCase;
    private cancel: AccountDeactiveUseCase;

    constructor() {
        this.create = new AccountCreateUseCase();
        this.login = new AccountLoginUseCase();
        this.cancel = new AccountDeactiveUseCase();
    }

    async createNewAccount(account: AccountDTO): Promise<any> {
        await this.checkAccountCpfOrCnpj(
            account.person,
            account.cpf,
            account.cnpj
        );

        await checkEmail(account.email);
        await checkUsername(account.username);
        await checkPassword(account.password);
        await checkMobileNumber(account.mobile);

        return await this.create.execute(account);
    }

    async makeLoginExistingAccount(accountLogin: AccountLoginDTO): Promise<any> {
        const loginAccount = await this.login.execute(accountLogin);

        const hash = loginAccount.password as string;

        const allowed = await HashPassword.hashPasswordCompare(accountLogin.password, hash);

        if (!allowed) {
            throw new LoginException("password does not match to this account");
        }

        return loginAccount;
    }

    async deactiveExistingAccount(accountId: number): Promise<any> {
        return await this.cancel.execute(accountId);
    }

    private async checkAccountCpfOrCnpj(person: EnumLegalPerson, cpf?: string, cnpj?: string): Promise<void> {
        const validadors = {
            [EnumLegalPerson.PHYSICAL_PERSON]: {
                checkDoc: checkCpf,
                checkDigits: checkCpfDigits,
                document: String(cpf),
            },
            [EnumLegalPerson.LEGAL_PERSON]: {
                checkDoc: checkCnpj,
                checkDigits: checkCnpjDigits,
                document: String(cnpj),
            }
        };

        const checker = validadors[person];

        await checker.checkDoc(checker.document);
        await checker.checkDigits(checker.document);
    }
}
