export function camelToSnake(value: string) {
    return value
        .replace(/[\w]([A-Z])/g, function(m) {
            return m[0] + '_' + m[1];
        })
        .toLowerCase();
}

export function objKeysCamelToSnake(obj: object): object {
    if (!obj) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(objKeysCamelToSnake);
    }

    const result: { [key: string]: object } = {};

    for (const key of Object.keys(obj)) {
        // @ts-ignore
        const value = obj[key];

        result[camelToSnake(key)] = typeof value === 'object' ? objKeysCamelToSnake(value) : value;
    }

    return result;
}
