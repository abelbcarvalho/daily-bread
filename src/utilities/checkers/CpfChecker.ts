export const checkCpf = (cpf: string): void => {
    const regex = "^[0-9]{11}$";

    const tester = new RegExp(regex);

    if (!tester.test(cpf)) {
        throw new Error("cpf digits invalid");
    }
};

export const checkCpfDigits = (cpf: string): void => {
    const checkFirst = cpf.substring(0, 9).split("").reverse();
    const checkSecond = cpf.substring(0, 10).split("").reverse();

    const digitsToCheck = cpf.substring(9, 11);

    let mult = 1;

    let frist = 2, second = 0;

    checkFirst.forEach((x) => {
        frist += parseInt(x) * mult;

        mult += 1;
    });

    mult = 2;

    checkSecond.forEach((x) => {
        second += parseInt(x) * mult;

        mult += 1;
    });

    const restFirst = frist % 11;
    const restSecond = second % 11;

    let digits = "";

    digits += 11 - restFirst ? 0 : [0,1].includes(restFirst);
    digits += 11 - restSecond ? 0 : [0,1].includes(restSecond);

    if (!(digitsToCheck === digits)) {
        throw new Error("cpf checker digits are invalid");
    }
};
