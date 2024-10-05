import { MoneyDTO } from "@dtos/MoneyDTO";

export interface MoneyInterface {
    createNewMoneyRegistry(money: MoneyDTO): Promise<any>;
    updateExistingMoneyRegistry(money: MoneyDTO, moneyId: number): Promise<any>;
    getAllMoneyByAccountId(accountId: number): Promise<Array<any>>;
}
