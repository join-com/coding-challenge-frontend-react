import * as actions from './Home.action';
import * as types from './Home.actionTypes';

describe('actions', () => {
  it('should create an action to get incidents with request status', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.GET_INCIDENTS_REQUEST,
      params: { a: 1 }
    };
    expect(actions.getIncidentsRequest({ a: 1 })).toEqual(expectedAction);
  });

  it('should create an action to get incidents with request success', () => {
    const text = [{ a: 'b' }];
    const expectedAction = {
      type: types.GET_INCIDENTS_SUCCESS,
      data: text
    };
    expect(actions.getIncidentsSuccess(text)).toEqual(expectedAction);
  });

  it('should create an action to get incidents with request failure', () => {
    const text = 'error';
    const expectedAction = {
      type: types.GET_INCIDENTS_FAILURE,
      error: text
    };
    expect(actions.getIncidentsFailure(text)).toEqual(expectedAction);
  });
});
