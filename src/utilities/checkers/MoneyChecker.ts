import { MoneyDTO } from "@dtos/MoneyDTO";
import { MoneyException } from "@exceptions/MoneyException";

export const moneyChecker = async (money: MoneyDTO): Promise<void> => {
    if (!money.accountId) {
        throw new MoneyException("money account id must be defined as an integer");
    }

    if (money.balance < 0) {
        throw new MoneyException("money balance can not be negative");
    }
};
