import { CnpjException } from "@exceptions/CnpjException";

export const checkCnpj = async (cnpj: string): Promise<void> => {
    const regex = "^[0-9]{14}$";

    const tester = new RegExp(regex);

    if (!tester.test(cnpj)) {
        throw new CnpjException("cnpj digits are invalid");
    }
};

export const checkCnpjDigits = async (cnpj: string): Promise<void> => {
    const checkFirst = cnpj.substring(0, 12).split("");
    const checkSecond = cnpj.substring(0, 13).split("");

    const digitsToCheck = cnpj.substring(12, 14);

    let mult = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let frist = 0, second = 0;

    let id = 0;

    checkFirst.forEach((x) => {
        let numItem = mult[id];
        frist += parseInt(x) * numItem;
        id += 1;
    });

    mult = (6 + mult.join("")).split("").map((x) => parseInt(x));
    id = 0;

    checkSecond.forEach((x) => {
        let numItem = mult[id];
        second += parseInt(x) * numItem;
        id += 1;
    });

    const restFirst = 11 - frist % 11;
    const restSecond = 11 - second % 11;

    let digits = "";

    digits += restFirst >= 10 ? 0 : restFirst;
    digits += restSecond >= 10 ? 0 : restSecond;

    if (!(digitsToCheck === digits)) {
        throw new CnpjException("cnpj checker digits are invalid");
    }
};
