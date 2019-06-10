import * as actions from './IncidentDetail.action';
import * as types from './IncidentDetail.actionTypes';

describe('actions', () => {
  it('should create an action to get incident detail with request status', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.GET_INCIDENT_DETAIL_REQUEST,
      params: { a: 1 }
    };
    expect(actions.getIncidentDetailRequest({ a: 1 })).toEqual(expectedAction);
  });

  it('should create an action to get incident detail with request success', () => {
    const text = [{ a: 'b' }];
    const expectedAction = {
      type: types.GET_INCIDENT_DETAIL_SUCCESS,
      data: text
    };
    expect(actions.getIncidentDetailSuccess(text)).toEqual(expectedAction);
  });

  it('should create an action to get incident detail with request failure', () => {
    const text = 'error';
    const expectedAction = {
      type: types.GET_INCIDENT_DETAIL_FAILURE,
      error: text
    };
    expect(actions.getIncidentDetailFailure(text)).toEqual(expectedAction);
  });
});
