import { UsernameException } from "@exceptions/UsernameException";

export const checkUsername = async (username: string): Promise<void> => {
    const regex = "^[a-z\._]{1}[a-z\._0-9]{3,32}$";

    const tester = new RegExp(regex);

    if (!tester.test(username)) {
        throw new UsernameException("username characters are invalid")
    }
};
