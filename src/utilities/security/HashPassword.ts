import { PasswordException } from "@exceptions/PasswordException";
import bcrypt from "bcrypt";

export class HashPassword {
    static async hashPassword(password: string | undefined): Promise<string> {
        if (!password) {
            throw new PasswordException("password can't be empty or undefined");
        }

        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(password, salt);

        return passHash;
    }

    static async hashPasswordCompare(password: string | undefined, hash: string): Promise<boolean> {
        const newPasswd = ("" ? password?.toString() : password) as string;

        return await bcrypt.compare(newPasswd, hash);
    }
}
