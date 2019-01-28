import { createAPIRequest } from './cases.api';

jest.useFakeTimers();

it('createAPIRequest returns promise with data', async () => {
  expect.assertions(1);

  const request = createAPIRequest('', 2, 5)();
  jest.runAllTimers();

  const data = await request;
  expect(data.list.length).toEqual(2);
});
