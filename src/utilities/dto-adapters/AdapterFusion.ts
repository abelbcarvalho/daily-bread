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

    static async fusionDataObjectRestrictDefined<U extends Array<string>, T extends Object, C>(dtoKeys: U, newDTO: T): Promise<C> {
        let data: C = {} as C;

        dtoKeys.map((x) => {
            if (newDTO[x as keyof T] !== undefined) {
                const c = x as keyof C;
                data[c] = newDTO[x as keyof T] as any;
            }
        });

        return data;
    }

    static async getDTOKeys<T>(dto: T): Promise<Array<keyof T>> {
        return Object.keys(dto as Object) as Array<keyof T>;
    }
}
