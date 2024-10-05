import { RecursivePaymentDTO } from "@dtos/RecursivePaymentDTO";
import { RecursivePayException } from "@exceptions/RecursivePayException";

export const recursivePayChecker = async (recursivePay: RecursivePaymentDTO): Promise<void> => {
    const { balance, month, day } = recursivePay;

    const validations = [
        { condition: balance < 0, message: "balance value cannot be negative" },
        { condition: month < 1 || month > 12, message: "month value is out of possible range" },
        { condition: day < 1 || day > 31, message: "day value is out of possible range" },
        { condition: month === 2 && day > 29, message: "day of February out of range" },
        { condition: [4, 6, 9, 11].includes(month) && day > 30, message: "day out of range for the selected month" }
    ];

    validations.forEach(async ({ condition, message }) => {
        if (condition) throw new RecursivePayException(message);
    });
};

export const recursivePayCheckerUpdate = async (recursivePay: RecursivePaymentDTO): Promise<void> => {
    const { balance, month, day } = recursivePay;

    const validations = [
        { condition: balance < 0 && balance !== 0, message: "balance value cannot be negative" },
        { condition: month !== 0 && (month < 1 || month > 12), message: "month value is out of possible range" },
        { condition: day !== 0 && (day < 1 || day > 31), message: "day value is out of possible range" },
        { condition: month === 2 && day > 29, message: "day of February out of range" },
        { condition: [4, 6, 9, 11].includes(month) && day > 30, message: "day out of range for the selected month" }
    ];

    validations.forEach(async ({ condition, message }) => {
        if (condition) throw new RecursivePayException(message);
    });
};
