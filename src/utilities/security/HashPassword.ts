import { PasswordException } from "@exceptions/PasswordException";
import bcrypt from "bcrypt";

export class HashPassword {
    static async hashPassword(password: string): Promise<string> {
        if (!password) {
            throw new PasswordException("password can't be empty or undefined");
        }

        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(password, salt);

        return passHash;
    }

    static async hashPasswordCompare(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}
