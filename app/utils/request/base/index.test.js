import { apiBaseUrl } from '../../../env';
import { extractJson, submitRequest } from './';

const Auth = require('../../auth');
const TOKEN = 'jwt token';

describe('#submitRequest', () => {
  describe('success', () => {
    const dummyResponse = new Response('{"hello":"world"}', {
      status: 200,
      headers: {
        'Content-type': 'application/json',
      },
    });

    let actualResponse;

    beforeEach(() => {
      window.fetch = jest.fn();
      window.fetch.mockReturnValue(Promise.resolve(dummyResponse));
    });

    describe('no headers, no data', () => {
      const url = 'https://api.github.com/users/alexander-elgin/repos?type=all&sort=updated';
      const method = 'GET';

      beforeEach((done) => {
        Auth.isTokenSet = jest.fn().mockReturnValue(true);

        submitRequest(url, method, false).then((response) => {
          actualResponse = response;
          done();
        });
      });

      it('submits a request without Authorization header', () => expect(window.fetch).toBeCalledWith(url, {
        method,
        headers: {},
      }));
    });

    describe('with headers, with data', () => {
      const url = '/auth/signin';
      const method = 'POST';
      const data = {
        username: 'alexander-elgin',
        password: '123',
      };

      beforeEach((done) => submitRequest(url, method, true, data).then((response) => {
        actualResponse = response;
        done();
      }));

      it('submits a request', () => expect(window.fetch).toBeCalledWith(url, {
        body: JSON.stringify(data),
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }));
    });

    describe('default API', () => {
      const url = `${apiBaseUrl}/users`;
      const method = 'POST';
      const data = {
        username: 'alexander-elgin',
        password: '123',
      };

      describe('token is set', () => {
        beforeEach((done) => {
          Auth.getToken = jest.fn().mockReturnValue(TOKEN);
          Auth.isTokenSet = jest.fn().mockReturnValue(true);

          submitRequest(url, method, true, data).then((response) => {
            actualResponse = response;
            done();
          });
        });

        it('submits a request with Authorization header', () => expect(window.fetch).toBeCalledWith(url, {
          body: JSON.stringify(data),
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
          },
        }));
      });

      describe('token is NOT set', () => {
        beforeEach((done) => {
          Auth.isTokenSet = jest.fn().mockReturnValue(false);

          submitRequest(url, method, true, data).then((response) => {
            actualResponse = response;
            done();
          });
        });

        it('submits a request without Authorization header', () => expect(window.fetch).toBeCalledWith(url, {
          body: JSON.stringify(data),
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }));
      });
    });

    afterEach(() => expect(actualResponse).toEqual(dummyResponse));
  });

  describe('failure', () => {
    beforeEach(() => {
      window.fetch = jest.fn();
      window.fetch.mockReturnValue(Promise.reject(new Error('fail')));
    });

    it('rejects with a particular status text', () => {
      expect(submitRequest(`${apiBaseUrl}/users`, 'POST', true, {})).resolves.toEqual({ statusText: '404 (Not Found)' });
    });
  });
});

describe('#extractJson', () => {
  describe('success', () => {
    const payload = { hello: 'world' };

    it('resolves JSON response', () => {
      expect(extractJson(Promise.resolve(new Response(JSON.stringify(payload), {
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })))).resolves.toEqual(payload);
    });
  });

  describe('failure', () => {
    const errorDescription = 'Not Found';

    it('rejects with an error', (done) => {
      extractJson(Promise.resolve(new Response(null, {
        status: 404,
        statusText: errorDescription,
        headers: {
          'Content-type': 'application/json',
        },
      }))).then(null, (error) => {
        expect(error).toEqual(new Error(errorDescription));
        done();
      });
    });
  });
});
