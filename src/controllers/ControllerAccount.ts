import { AddapterAccountDTO } from "@utilities/dto-adapters/AdapterAccountDTO";
import { AddapterAccountLoginDTO } from "@utilities/dto-adapters/AdapterAccountLoginDTO";
import { AdapterRequestParam } from '../utilities/dto-adapters/AdapterRequestParam';

export class ControllerAccount {
    constructor() { }

    async createNewAccount(response: Response, request: Request): Promise<any> {
        const adapter = new AddapterAccountDTO(request);

        const account = await adapter.adapterAccountDTO();
    }

    async makeLoginExistingAccount(response: Response, request: Request): Promise<any> {
        const adapter = new AddapterAccountLoginDTO(request);

        const loginAccount = await adapter.adapterAccountLoginDTO();
    }

    async deactiveExistingAccount(response: Response, request: Request): Promise<any> {
        const adapter = new AdapterRequestParam(request);

        const accountId = await adapter.getParamID();
    }
}
