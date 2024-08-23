import { AccountDTO } from "@dtos/AccountDTO";
import { AccountLoginDTO } from "@dtos/AccountLoginDTO";
import { EnumLegalPerson } from "@enumerates/EnumLegalPerson";
import { checkCnpj, checkCnpjDigits } from "@utilities/checkers/CnpjChecker";
import { checkCpf, checkCpfDigits } from "@utilities/checkers/CpfChecker";
import { checkEmail } from "@utilities/checkers/EmailChecker";
import { checkMobileNumber } from "@utilities/checkers/MobileChecker";
import { checkPassword } from "@utilities/checkers/PasswordChecker";
import { checkUsername } from "@utilities/checkers/UsernameChecker";

export class ServiceAccount {
    constructor() { }

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
    }

    async makeLoginExistingAccount(accountLogin: AccountLoginDTO): Promise<any> {
    }

    async deactiveExistingAccount(accountId: number): Promise<any> {
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
