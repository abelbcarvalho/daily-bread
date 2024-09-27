import {
    Request,
    Response,
    NextFunction
} from "express";
import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

export const tokenAuthentication = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return response.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return response.sendStatus(403);
        request.user = user;
        next();
    });
};

export const generateToken = async (payload: any): Promise<string> => {
    return jwt.sign(payload, SECRET_KEY);
};
