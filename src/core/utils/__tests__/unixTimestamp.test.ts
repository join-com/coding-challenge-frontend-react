import { convertFromUnixTimestamp, convertToUnixTimestamp } from '../unixTimestamp';

it('should be js timestamp', (): void => {
    expect(convertFromUnixTimestamp(1558852439)).toBe(1558852439000);

    expect(convertFromUnixTimestamp(1556179200)).toBe(1556179200000);
});

it('should be unix timestamp', (): void => {
    expect(convertToUnixTimestamp(1558852439437)).toBe(1558852439);

    expect(convertToUnixTimestamp(1558852449599)).toBe(1558852449);
});
