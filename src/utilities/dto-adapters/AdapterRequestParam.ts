import { ParameterException } from "@exceptions/ParameterException";
import { Request } from "express";

export class AdapterRequestParam {
    private params: any;

    constructor(request: Request) {
        this.params = request.params;
    }

    async getParamID(): Promise<number> {
        const id = (
            this.params.id && !isNaN(Number(this.params.id))
        ) ? this.params.id : null;

        if (id === null) {
            throw new ParameterException("parameter id not found on request");
        }

        return parseInt(id);
    }
}
