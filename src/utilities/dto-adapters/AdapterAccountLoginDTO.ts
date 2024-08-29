import { Request } from "express";
import { AccountLoginDTO } from "@dtos/AccountLoginDTO";
import { BodyException } from "@exceptions/BodyException";

export class AddapterAccountLoginDTO {
    private body: any;

    constructor(request: Request) {
        this.body = request.body === null ? null : request.body;
    }

    private async isBodyNull(): Promise<void> {
        if (this.body === null) {
            throw new BodyException("request body can't be null");
        }

        this.body = this.body as AccountLoginDTO;
    }

    private async isAccountLoginDTORequired(): Promise<boolean> {
        const requiredValidators = new Map<string, (value: any) => boolean>([
            ['username', value => typeof value === 'string'],
            ['password', value => typeof value === 'string'],
        ]);

        return Array.from(requiredValidators.entries()).every(([key, validate]) => validate(this.body[key]));
    }

    async adapterAccountLoginDTO(): Promise<AccountLoginDTO> {
        await this.isBodyNull();

        const requires = await this.isAccountLoginDTORequired();

        if (requires === false) {
            throw new BodyException("body is invalid for account login");
        }

        return this.body;
    }
}
