import { dateToOrdinalString } from '../dateToOrdinalString';

it('should be ordinal number of day', (): void => {
    expect(dateToOrdinalString(1558852439)).toBe('May 26th 2019, 1:33 PM');
});
