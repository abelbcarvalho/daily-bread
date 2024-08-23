import { AddapterAccountDTO } from "@utilities/dto-adapters/AdapterAccountDTO";
import { AddapterAccountLoginDTO } from "@utilities/dto-adapters/AdapterAccountLoginDTO";
import { AdapterRequestParam } from '../utilities/dto-adapters/AdapterRequestParam';
import { ServiceAccount } from "@services/ServiceAccount";
import { AccountInterface } from "@interfaces/AccountInterface";

export class ControllerAccount {
    private service: AccountInterface;

    constructor() {
        this.service = new ServiceAccount();
    }

    async createNewAccount(response: Response, request: Request): Promise<any> {
        const adapter = new AddapterAccountDTO(request);

        const account = await adapter.adapterAccountDTO();

        return await this.service.createNewAccount(account);
    }

    async makeLoginExistingAccount(response: Response, request: Request): Promise<any> {
        const adapter = new AddapterAccountLoginDTO(request);

        const loginAccount = await adapter.adapterAccountLoginDTO();

        return await this.service.makeLoginExistingAccount(loginAccount);
    }

    async deactiveExistingAccount(response: Response, request: Request): Promise<any> {
        const adapter = new AdapterRequestParam(request);

        const accountId = await adapter.getParamID();

        return await this.service.deactiveExistingAccount(accountId);
    }
}
