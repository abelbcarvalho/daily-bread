export class AdaptperFusion {
    constructor() { }

    static async fusionDataObjectDefined<U, T extends Object, C>(dto1: U, dto2: T): Promise<C> {
        const data: C = {
            ...dto1,
            ...Object.keys(dto2).reduce((acc, key) => {
                if (dto2[key as keyof T] !== undefined) {
                    (acc as any)[key] = dto2[key as keyof T];
                }
                return acc;
            }, {} as C)
        };

        return data as C;
    }
}
