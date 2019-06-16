export const FormatUTCDate = (UTC: number):string => {
    const date = new Date(UTC * 1000);
    return date.toDateString();
}