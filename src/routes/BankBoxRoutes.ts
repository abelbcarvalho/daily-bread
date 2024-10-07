
import { ControllerBankBox } from "@controllers/ControllerBankBox";
import { tokenAuthentication } from "@middlewares/AuthMiddleware";
import { Router } from "express";

const bankBoxRouter = Router();

const controllerBankBox = new ControllerBankBox();

/** code is here, the routes */

bankBoxRouter.post("/", tokenAuthentication, async (request, response) => {
    return await controllerBankBox.createNewBankBox(response, request);
});

bankBoxRouter.post("/:id/update", tokenAuthentication, async (request, response) => {
    return await controllerBankBox.updateAnExistingBankBox(response, request);
});

bankBoxRouter.post("/:bankId/all", tokenAuthentication, async (request, response) => {
    return await controllerBankBox.getAllBankBoxByBankId(response, request);
});

export default bankBoxRouter;
