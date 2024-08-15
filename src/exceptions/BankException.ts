export class BankException extends Error {
    public code: number;

    constructor(message: string, code: number = 400) {
        super();
        this.code = code;
        this.message = message;
        this.name = "BankException"
    }
}
