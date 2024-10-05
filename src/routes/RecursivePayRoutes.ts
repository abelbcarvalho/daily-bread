import { tokenAuthentication } from "@middlewares/AuthMiddleware";
import { Router } from "express";

const recursivePayRouter = Router();

/** code is here, the routes */

recursivePayRouter.post("/", tokenAuthentication, async (request, response) => { });

recursivePayRouter.post("/:id/update", tokenAuthentication, async (request, response) => { });

recursivePayRouter.post("/all", tokenAuthentication, async (request, response) => { });

export default recursivePayRouter;
