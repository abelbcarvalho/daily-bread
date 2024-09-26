export class EnumerateUtil {
    static async typescriptEnumToPrismaEnum<T, U>(enumTs: T, classe: { [key: string]: U }): Promise<U> {
        const key = (enumTs as unknown as string).toUpperCase();

        return classe[key];
    }

    static async prismaEnumToTypescriptEnum<T, U>(enumPr: U, classe: { [key: string]: T }): Promise<T> {
        const key = (enumPr as unknown as string).toLowerCase();

        return classe[key];
    }
}
