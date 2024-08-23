import { AccountDTO } from "@dtos/AccountDTO";
import { EnumGender } from "@enumerates/EnumGender";
import { EnumLegalPerson } from "@enumerates/EnumLegalPerson";
import { BodyException } from "@exceptions/BodyException";

export class AddapterAccountDTO {
    private body: any;

    constructor(request: Request) {
        this.body = request.body === null ? null : request.body;
    }

    private async isBodyNull(): Promise<void> {
        if (this.body === null) {
            throw new BodyException("request body can't be null");
        }

        this.body = this.body as AccountDTO;
    }

    private async isAccountDTORequired(): Promise<boolean> {
        const requiredValidators = new Map<string, (value: any) => boolean>([
            ['name', value => typeof value === 'string'],
            ['gender', value => Object.values(EnumGender).includes(value)],
            ['person', value => Object.values(EnumLegalPerson).includes(value)],
            ['email', value => typeof value === 'string'],
            ['username', value => typeof value === 'string'],
            ['password', value => typeof value === 'string'],
            ['mobile', value => typeof value === 'string'],
        ]);

        return Array.from(requiredValidators.entries()).every(([key, validate]) => validate(this.body[key]));
    }

    private async isAccountDTOOptional(): Promise<boolean> {
        const optionalValidators = new Map<string, (value: any) => boolean>([
            ['socialName', value => !value || typeof value === 'string'],
            ['cpf', value => !value || typeof value === 'string'],
            ['cnpj', value => !value || typeof value === 'string'],
        ]);

        return Array.from(optionalValidators.entries()).every(([key, validate]) => validate(this.body[key]));
    }

    async adapterAccountDTO(): Promise<AccountDTO> {
        await this.isBodyNull();

        const requires = await this.isAccountDTORequired();
        const optionals = await this.isAccountDTOOptional();

        if ([requires, optionals].includes(false)) {
            throw new BodyException("body is invalid for account");
        }

        return this.body;
    }
}
