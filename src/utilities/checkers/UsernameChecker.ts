export const checkUsername = (username: string): void => {
    const regex = "^[a-z\._]{1}[a-z\._0-9]{3,32}$";

    const tester = new RegExp(regex);

    if (!tester.test(username)) {
        throw new Error("username characters are invalid")
    }
};
