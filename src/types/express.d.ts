import { User } from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}
