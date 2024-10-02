export class EnumerateUtil {
    static async getEnumerateValue<T, U>(enumPr: T, classe: { [key: string]: U }): Promise<U> {
        const key = (enumPr as unknown as string).toUpperCase();

        return classe[key];
    }
}
