export const checkBankNumberAccount = (bankNum: string): void => {
    const regex = "^[0-9]{8,12}$"

    const tester = new RegExp(regex);

    if (!tester.test(bankNum)) {
        throw new Error("bank account number invalid");
    }
};

export const checkBankAgency = (bankNum: string): void => {
    const regex = "^[0-9]{4,5}$"

    const tester = new RegExp(regex);

    if (!tester.test(bankNum)) {
        throw new Error("bank agency number invalid");
    }
};

export const checkCardNumber = (card: string): void => {
    const regex = "^[0-9]{13,19}$"

    const tester = new RegExp(regex);

    if (!tester.test(card)) {
        throw new Error("card number invalid");
    }
};

export const checkCvvCard = (cardCvv: string): void => {
    const regex = "^[0-9]{3}$"

    const tester = new RegExp(regex);

    if (!tester.test(cardCvv)) {
        throw new Error("security code number invalid");
    }
};

export const checkExpireDate = (expireDate: Date): void => {
    const tester = expireDate > new Date();

    if (!tester) {
        throw new Error("the card has expired");
    }
};

export const checkCodeBank = (codeBank: string): void => {
    const regex = "^[0-9]{3}$"

    const tester = new RegExp(regex);

    if (!tester.test(codeBank)) {
        throw new Error("bank code number invalid");
    }
};

export const checkVariationBankAccount = (variation: number): void => {
    if (variation < 1) {
        throw new Error("bank account variation invalid");
    }
};
