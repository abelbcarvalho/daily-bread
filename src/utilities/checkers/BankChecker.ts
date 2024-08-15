export const checkBankNumberAccount = async (bankNum: string): Promise<void> => {
    const regex = "^[0-9]{8,12}$"

    const tester = new RegExp(regex);

    if (!tester.test(bankNum)) {
        throw new Error("bank account number invalid");
    }
};

export const checkBankAgency = async (bankNum: string): Promise<void> => {
    const regex = "^[0-9]{4,5}$"

    const tester = new RegExp(regex);

    if (!tester.test(bankNum)) {
        throw new Error("bank agency number invalid");
    }
};

export const checkCardNumber = async (card: string): Promise<void> => {
    const regex = "^[0-9]{13,19}$"

    const tester = new RegExp(regex);

    if (!tester.test(card)) {
        throw new Error("card number invalid");
    }
};

export const checkCvvCard = async (cardCvv: string): Promise<void> => {
    const regex = "^[0-9]{3}$"

    const tester = new RegExp(regex);

    if (!tester.test(cardCvv)) {
        throw new Error("security code number invalid");
    }
};

export const checkExpireDate = async (expireDate: Date): Promise<void> => {
    const tester = expireDate > new Date();

    if (!tester) {
        throw new Error("the card has expired");
    }
};

export const checkCodeBank = async (codeBank: string): Promise<void> => {
    const regex = "^[0-9]{3}$"

    const tester = new RegExp(regex);

    if (!tester.test(codeBank)) {
        throw new Error("bank code number invalid");
    }
};

export const checkVariationBankAccount = async (variation: number): Promise<void> => {
    if (variation < 1) {
        throw new Error("bank account variation invalid");
    }
};
