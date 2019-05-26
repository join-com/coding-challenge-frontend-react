import { convertFromUnixTimestamp } from './unixTimestamp';

export function dateToOrdinalString(date: number): string {
    const dateStr = new Date(convertFromUnixTimestamp(date)).toLocaleString([], {
        minute: 'numeric',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
    });

    return dateStr
        .split(' ')
        .map((item, index) => {
            if (index === 1) {
                return convert(parseInt(item, 10));
            }
            return item;
        })
        .join(' ');
}

function convert(n: number) {
    let res = '';
    if (n === 0) return (res = String(n));

    switch (n % 10) {
        case 1:
            if (n === 11) return (res = `${n}th`);
            res = `${n}st`;
            break;
        case 2:
            if (n === 12) return (res = `${n}th`);
            res = `${n}nd`;
            break;
        case 3:
            if (n === 13) return (res = `${n}th`);
            res = `${n}rd`;
            break;
        default:
            res = `${n}th`;
            break;
    }
    return res;
}
