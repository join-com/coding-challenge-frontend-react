export function camelToSnake(value: string) {
    return value
        .replace(/[\w]([A-Z])/g, function(m) {
            return m[0] + '_' + m[1];
        })
        .toLowerCase();
}

export function objKeysCamelToSnake(obj: object) {
    const result = {};

    for (const key of Object.keys(obj)) {
        // @ts-ignore
        result[camelToSnake(key)] = obj[key];
    }

    return result;
}
