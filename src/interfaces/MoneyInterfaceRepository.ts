import { Money } from "@domain/Money";

export interface MoneyInterfaceRepository {
    createNewMoneyRegistry(money: Money): Promise<any>;
    updateExistingMoneyRegistry(money: Money, moneyId: number): Promise<any>;
}
