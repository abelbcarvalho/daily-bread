export class BaseException extends Error {
    public code: number;

    constructor() {
        super();
        this.code = 0;
    }
}
