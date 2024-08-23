import { PasswordException } from "@exceptions/PasswordException";

export const checkPassword = async (password: string, min: number = 4, max: number = 32): Promise<void> => {
    const regex = `^.{${min},${max}}$`;
    if (!password.match(regex)) {
        throw new PasswordException(`password length outs of bounds from ${min} to ${max}`);
    }
};
