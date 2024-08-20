import { MobileException } from "../../exceptions/MobileException";

export const checkMobileNumber = async (mobile: string): Promise<void> => {
    const regex = "^\\+[0-9]{13}$";

    const tester = new RegExp(regex);

    if (!tester.test(mobile)) {
        throw new MobileException("mobile number digits invalid");
    }
};
