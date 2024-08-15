import { BaseException } from "./BaseException";

export class EmailException extends BaseException {
    constructor(message: string, code: number = 400) {
        super();
        this.code = code;
        this.message = message;
        this.name = "EmailException"
    }
}
