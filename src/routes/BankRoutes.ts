import { ControllerBank } from "@controllers/ControllerBank";
import { tokenAuthentication } from "@middlewares/AuthMiddleware";
import { Router } from "express";

const bankRouter = Router();

const controllerBank = new ControllerBank();

/** code is here, the routes */

bankRouter.post("/", tokenAuthentication, async (request, response) => {
    return await controllerBank.createNewBankAccount(response, request);
});

bankRouter.post("/:id/update", tokenAuthentication, async (request, response) => {
    return await controllerBank.updateExistingBankAccount(response, request);
});

bankRouter.post("/all", tokenAuthentication, async (request, response) => {
    return await controllerBank.getAllBankAccountFromAnUser(response, request);
});

export default bankRouter;
