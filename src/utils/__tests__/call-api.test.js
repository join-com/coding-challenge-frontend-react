// Test module
import callApi from '../call-api';

// Test utilities
import { IncidentsModel, IncidentModel } from '../__mocks__/testData';

/* eslint-env jest */
describe('Module call-api:', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('callApi method must exists', () => {
    expect(
      typeof callApi,
    ).toBe('function');
  });

  test('must send fetch—request', () => {
    callApi();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('on API answer with status 200 — must return data from API', async () => {
    await expect(callApi())
      .resolves
      .toEqual(new IncidentsModel());
  });

  test('must return an error message on response with status not equal 200', async () => {
    global.fetchResponseStatus = 404;
    expect.assertions(1);

    try {
      await callApi();
    } catch (e) {
      expect(e).toEqual(new Error(`ERROR: ${new Error('ERROR response status incorrect : 404')}`));
    }

    global.fetchResponseStatus = 200;
  });

  test('if callApi() method called with ID then must return data of one incident', async () => {
    const id = 83629;

    await expect(callApi({ id }))
      .resolves
      .toEqual(new IncidentModel({ id }));
  });

  test('id undefined', async () => {
    await expect(callApi({ query: '', id: undefined }))
      .resolves
      .toEqual(new IncidentsModel());
  });
});
