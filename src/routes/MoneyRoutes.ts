import { ControllerMoney } from "@controllers/ControllerMoney";
import { tokenAuthentication } from "@middlewares/AuthMiddleware";
import { Router } from "express";

const moneyRouter = Router();

const controllerMoney = new ControllerMoney();

/** code is here, the routes */

moneyRouter.post("/", tokenAuthentication, async (request, response) => {
    return await controllerMoney.createNewMoneyRegistry(response, request);
});

moneyRouter.post("/:id/update", tokenAuthentication, async (request, response) => {
    return await controllerMoney.updateExistingMoneyRegistry(response, request);
});

moneyRouter.post("/all", tokenAuthentication, async (request, response) => {
    return await controllerMoney.getAllMoneyByAccountId(response, request);
});

export default moneyRouter;
