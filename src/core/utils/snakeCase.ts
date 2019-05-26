export function snakeToCamel(value: string) {
    return value.replace(/(_\w)/g, function(m) {
        return m[1].toUpperCase();
    });
}

export function objKeysSnakeToCamel(obj: object): object {
    if (!obj || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(objKeysSnakeToCamel);
    }

    const result: { [key: string]: object } = {};

    for (const key of Object.keys(obj)) {
        // @ts-ignore
        const value = obj[key];

        result[snakeToCamel(key)] = typeof value === 'object' ? objKeysSnakeToCamel(value) : value;
    }

    return result;
}
