import { homeReducer } from './Home.reducer';
import * as types from './IncidentDetail.actionTypes';

describe('reducer', () => {
  it('should create an reducer to get incident detail with request status', () => {
    const expected = {
      request: true,
      data: null,
      error: null
    };

    const result = homeReducer(undefined, {
      type: types.GET_INCIDENT_DETAIL_REQUEST
    });
    expect(result).toEqual(expected);
  });

  it('should create an reducer to get incident detail with success status', () => {
    const expected = {
      request: false,
      data: { a: 1 },
      error: null
    };

    const result = homeReducer(undefined, {
      type: types.GET_INCIDENT_DETAIL_SUCCESS,
      data: { a: 1 }
    });
    expect(result).toEqual(expected);
  });

  it('should create an reducer to get incident detail with failure status', () => {
    const expected = {
      request: false,
      data: null,
      error: new Error()
    };

    const result = homeReducer(undefined, {
      type: types.GET_INCIDENT_DETAIL_FAILURE,
      error: new Error()
    });
    expect(result).toEqual(expected);
  });
});
