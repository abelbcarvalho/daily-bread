import { BankException } from "@exceptions/BankException";

export const checkBankNumberAccount = async (bankNum: string): Promise<void> => {
    const regex = "^[0-9]{8,12}$"

    const tester = new RegExp(regex);

    if (!tester.test(bankNum)) {
        throw new BankException("bank account number invalid");
    }
};

export const checkBankAgency = async (bankNum: string): Promise<void> => {
    const regex = "^[0-9]{4,5}$"

    const tester = new RegExp(regex);

    if (!tester.test(bankNum)) {
        throw new BankException("bank agency number invalid");
    }
};

export const checkCardNumber = async (card: string): Promise<void> => {
    const regex = "^[0-9]{13,19}$"

    const tester = new RegExp(regex);

    if (!tester.test(card)) {
        throw new BankException("card number invalid");
    }
};

export const checkCvvCard = async (cardCvv: string): Promise<void> => {
    const regex = "^[0-9]{3}$"

    const tester = new RegExp(regex);

    if (!tester.test(cardCvv)) {
        throw new BankException("security code number invalid");
    }
};

export const checkExpireDate = async (expireDate: Date): Promise<void> => {
    const tester = expireDate > new Date();

    if (!tester) {
        throw new BankException("the card has expired");
    }
};

export const checkCodeBank = async (codeBank: string): Promise<void> => {
    const regex = "^[0-9]{3}$"

    const tester = new RegExp(regex);

    if (!tester.test(codeBank)) {
        throw new BankException("bank code number invalid");
    }
};

export const checkVariationBankAccount = async (variation: number): Promise<void> => {
    if (variation < 1) {
        throw new BankException("bank account variation invalid");
    }
};
