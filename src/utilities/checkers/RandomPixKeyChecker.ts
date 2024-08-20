import { PixException } from "@exceptions/PixException";

export const checkRandomPixKey = async (pixKey: string): Promise<void> => {
    const regex = "^[A-Z0-9]{8,32}$";

    const tester = RegExp(regex);

    if (!tester.test(pixKey)) {
        throw new PixException("random pix key invalid");
    }
};
