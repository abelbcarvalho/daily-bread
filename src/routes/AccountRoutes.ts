import { ControllerAccount } from "@controllers/ControllerAccount";
import { Router } from "express";

const accountRouter = Router();

const controllerAccount = new ControllerAccount();

/** code is here, the routes */

accountRouter.post("/", async (request, response) => {
    return await controllerAccount.createNewAccount(response, request);
});

accountRouter.post("/login", async (request, response) => {
    return await controllerAccount.makeLoginExistingAccount(response, request);
});

accountRouter.post("/deactive/:id", async (request, response) => {
    return await controllerAccount.deactiveExistingAccount(response, request);
});

export default accountRouter;
