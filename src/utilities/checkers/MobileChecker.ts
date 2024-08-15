export const checkMobileNumber = (mobile: string): void => {
    const regex = "^\\+[0-9]{13}$";

    const tester = new RegExp(regex);

    if (!tester.test(mobile)) {
        throw new Error("mobile number digits invalid");
    }
};
