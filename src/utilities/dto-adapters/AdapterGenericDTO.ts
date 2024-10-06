export class AdapterGenericDTO {
    static getReduceDTO<T extends Object>(keys: Array<string>, object: T, param: any): Object {
        return keys.reduce((result: { [key: string]: any }, key) => {
            if (object.hasOwnProperty(key) && (object as any)[key] && ((object as any)[key] !== param)) {
                result[key] = (object as any)[key];
            }
            return result;
        }, {});
    }
}
