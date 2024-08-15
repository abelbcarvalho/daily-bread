import { BaseException } from "./BaseException";

export class PixException extends BaseException {
    constructor(message: string, code: number = 400) {
        super();
        this.code = code;
        this.message = message;
        this.name = "PixException"
    }
}
