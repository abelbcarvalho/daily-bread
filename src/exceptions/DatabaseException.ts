import { BaseException } from "./BaseException";

export class DatabaseException extends BaseException {
    constructor(message: string, code: number = 400) {
        super();
        this.message = message;
        this.code = code;
        this.name = "DatabaseException";
    }
}
