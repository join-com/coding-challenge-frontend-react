jest.mock('axios');

import request from './request';
import axios from 'axios';

describe('test request utils', () => {
  it('should resolve a result', async () => {
    axios.mockImplementationOnce(() => Promise.resolve('OK'));

    try {
      const result = await request({
        url: '/mock',
        method: 'GET'
      });

      expect(result).toEqual('OK');
    } catch (error) {}
  });

  it('should resolve a error', async () => {
    axios.mockImplementationOnce(() => Promise.reject('OK'));
    try {
      await request({
        url: '/mock',
        method: 'GET'
      });
    } catch (error) {
      expect(error).toEqual('OK');
    }
  });
});
