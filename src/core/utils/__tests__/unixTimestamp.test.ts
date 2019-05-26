import { convertFromUnixTimestamp } from '../unixTimestamp';

it('should be js timestamp', (): void => {
    expect(convertFromUnixTimestamp(1558852439)).toBe(1558852439000);

    expect(convertFromUnixTimestamp(1556179200)).toBe(1556179200000);
});
