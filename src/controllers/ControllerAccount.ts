import { AddapterAccountDTO } from "@utilities/dto-adapters/AdapterAccountDTO";

export class ControllerAccount {
    constructor() { }

    async createNewAccount(response: Response, request: Request): Promise<any> {
        const adapter = new AddapterAccountDTO(request);

        const account = await adapter.adapterAccountDTO();
    }

    async makeLoginExistingAccount(response: Response, request: Request): Promise<any> {
    }

    async deactiveExistingAccount(response: Response, request: Request): Promise<any> {
    }
}
