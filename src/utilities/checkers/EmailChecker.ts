export const checkEmail = (email: string): void => {
    const regex = "^[a-z\-_0-9]{1}[a-z\-_0-9.\+]{0,62}[a-z\-_0-9]{1}\@[a-z\-_0-9]{1}[a-z\-_0-9.\+]{0,177}\.[a-z]{2,10}$";

    const tester = new RegExp(regex);

    if (!tester.test(email)) {
        throw new Error("email characters are invalid");
    }
};
