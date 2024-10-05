import { ControllerRecursivePay } from "@controllers/ControllerRecursivePay";
import { tokenAuthentication } from "@middlewares/AuthMiddleware";
import { Router } from "express";

const recursivePayRouter = Router();
const controllerRecursivePay = new ControllerRecursivePay();

/** code is here, the routes */

recursivePayRouter.post("/", tokenAuthentication, async (request, response) => {
    return await controllerRecursivePay.createNewRecursivePayment(response, request);
});

recursivePayRouter.post("/:id/update", tokenAuthentication, async (request, response) => {
    return await controllerRecursivePay.updateAnExistingRecursivePayment(response, request);
});

recursivePayRouter.post("/all", tokenAuthentication, async (request, response) => {
    return await controllerRecursivePay.getAllRecursivePaymentsByAccountId(response, request);
});

export default recursivePayRouter;
