import { convertToQueryParams } from './url';

describe('utils/urls test', () => {
  it('convertToQueryParams should return correct query params', () => {
    expect(convertToQueryParams(undefined)).toBe(``);
    expect(convertToQueryParams({ a: undefined })).toBe(`a=`);
    expect(convertToQueryParams({ foo: 'bar' })).toBe(`foo=bar`);
    expect(convertToQueryParams({ foo: 'bar bar' })).toBe(`foo=bar%20bar`);
    expect(convertToQueryParams({ foo: undefined, bar: undefined })).toBe(
      `foo=&bar=`
    );
    expect(convertToQueryParams({ foo: '1', bar: 'hello' })).toBe(
      `foo=1&bar=hello`
    );
  });
});
