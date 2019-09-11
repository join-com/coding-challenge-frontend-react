export function convertFromUnixTimestamp(unix: number): number {
    return Number(unix + '000');
}

export function convertToUnixTimestamp(time: number): number {
    return Number(String(time).slice(0, -3));
}
