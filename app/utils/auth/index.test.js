import { getToken, isTokenSet, removeToken, setToken } from './';

const token = 'jwt token value';
const TOKEN_FIELD_NAME = 'jwt_token';

describe('#removeToken', () => {
  it('removes the token', () => {
    jest.spyOn(localStorage, 'removeItem');
    removeToken();
    expect(localStorage.removeItem).toBeCalledWith(TOKEN_FIELD_NAME);
  });
});

describe('#setToken', () => {
  it('saves the token', () => {
    jest.spyOn(localStorage, 'setItem');
    setToken(token);
    expect(localStorage.setItem).toBeCalledWith(TOKEN_FIELD_NAME, token);
  });
});

describe('#getToken', () => {
  it('gets the token', () => {
    jest.spyOn(localStorage, 'getItem');
    localStorage.getItem.mockReturnValue(token);
    expect(getToken()).toBe(token);
    expect(localStorage.getItem).toBeCalledWith(TOKEN_FIELD_NAME);
  });
});

describe('#isTokenSet', () => {
  beforeEach(() => jest.spyOn(localStorage, 'getItem'));

  describe('the token is set', () => {
    beforeEach(() => localStorage.getItem.mockReturnValue(token));
    it('return true', () => expect(isTokenSet()).toBe(true));
  });

  describe('the token is NOT set', () => {
    beforeEach(() => localStorage.getItem.mockReturnValue(null));
    it('return false', () => expect(isTokenSet()).toBe(false));
  });
});
