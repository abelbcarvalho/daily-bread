import { DateException } from "@exceptions/DateException";

const dayMonthChecker = async (day: number, month: number): Promise<void> => {
    const validator: {[key: string]: number} = {
        "1,3,5,7,8,10,12": 31,
        "4,6,9,11": 30,
        "2": 29
    };

    const keys = Object.keys(validator);

    let theKey = "";

    keys.forEach((x) => {
        const array = x.split(",").map((y) => parseInt(y));

        if (array.includes(month)) {
            theKey = x;
        } 
    });

    if (theKey.length === 0) {
        throw new DateException("the month here is invalid");
    }

    const days = validator[theKey];

    if (day < 1 || day > days) {
        throw new DateException("the day is invalid for this month");
    }
};
