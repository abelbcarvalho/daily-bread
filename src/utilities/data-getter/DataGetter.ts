import { RequestException } from "@exceptions/RequestException";
import { Request } from "express";

export const getAccountIdFromRequestBody = async (request: Request): Promise<number> => {
    if (!request.body.account_id_fk) {
        throw new RequestException("the request body should have account id");
    }

    const accountId = parseInt(request.body.account_id_fk);

    return accountId;
};
