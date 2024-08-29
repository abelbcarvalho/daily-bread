import {
    Request,
    Response,
    NextFunction
} from "express";
import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

export const tokenAuthentication = (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return response.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return response.sendStatus(403);
        request.user = user;
        next();
    });
};
