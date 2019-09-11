export function arrayToObj<Item>(array: Item[], key: string): { [key: string]: Item } {
    const initObj: { [key: string]: Item } = {};

    return array.reduce(function(acc, item) {
        // @ts-ignore
        acc[item[key]] = item;

        return acc;
    }, initObj);
}
