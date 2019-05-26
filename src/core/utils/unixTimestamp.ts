export function convertFromUnixTimestamp(unix: number): number {
    return Number(unix + '000');
}
