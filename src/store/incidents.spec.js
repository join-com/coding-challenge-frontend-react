import reducer, {
  initialState,
  FETCH_INCIDENTS_SUCCESS,
  FETCH_INCIDENT_SUCCESS,
  fetchIncidentsSuccess,
  fetchIncidentSuccess,
  getIncidentsSelector,
  getFilteredIncidentsSelector,
  getTotalIncidentsSelector,
  getPaginationSelector,
  getSlicedIncidentsSelector,
  getIncidentById
} from "./incidents";
import globalStateMock from "../mocks/storeMock";

const item1 = { id: 1, title: "title" };
const item2 = { id: 2, title: "title2" };

describe("incidents redux module", () => {
  describe("incidents reducer", () => {
    it("should return default state", () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    it("should return default state for not serviced action", () => {
      expect(reducer(initialState, { type: "SOME_ACTION" })).toEqual(initialState);
    });

    it("should return correct state for FETCH_INCIDENTS_SUCCESS action", () => {
      expect(
        reducer(initialState, {
          type: FETCH_INCIDENTS_SUCCESS,
          payload: [item1]
        })
      ).toEqual({ "1": item1 });
    });

    it("should return correct state for FETCH_INCIDENT_SUCCESS action", () => {
      expect(
        reducer(
          { 1: item1 },
          {
            type: FETCH_INCIDENT_SUCCESS,
            payload: item2
          }
        )
      ).toEqual({ 1: item1, 2: item2 });
    });
  });

  describe("incidents actions", () => {
    it("should create correct action by fetchIncidentsSuccess ", () => {
      const expectedAction = { payload: [item1, item2], type: FETCH_INCIDENTS_SUCCESS };
      expect(fetchIncidentsSuccess([item1, item2])).toEqual(expectedAction);
    });

    it("should create correct action by fetchIncidentSuccess ", () => {
      const expectedAction = { payload: item1, type: FETCH_INCIDENT_SUCCESS };
      expect(fetchIncidentSuccess(item1)).toEqual(expectedAction);
    });
  });

  describe("incidents selectors", () => {
    it("should return correct value for getIncidentsSelector selector", () => {
      const expectedValue = Object.keys(globalStateMock.incidents).map(key => globalStateMock.incidents[key]);
      expect(getIncidentsSelector(globalStateMock)).toEqual(expectedValue);
    });
    it("should return correct value for getFilteredIncidentsSelector selector", () => {
      expect(
        getFilteredIncidentsSelector({
          ...globalStateMock,
          ui: {
            ...globalStateMock.ui,
            searchValue: "Stolen 2012 Cannondale Caad8 7 "
          }
        })
      ).toEqual([globalStateMock.incidents[3522]]);
    });
    it("should return correct value for getTotalIncidentsSelector selector", () => {
      expect(getTotalIncidentsSelector(globalStateMock)).toEqual(5);
    });
    it("should return correct value for getPaginationSelector selector", () => {
      expect(getPaginationSelector(globalStateMock)).toEqual([1, 2, 3]);
      expect(
        getPaginationSelector({
          ...globalStateMock,
          ui: {
            ...globalStateMock.ui,
            itemsPerPage: 10
          }
        })
      ).toEqual([1]);
    });
    it("should return correct value for getSlicedIncidentsSelector selector", () => {
      expect(getSlicedIncidentsSelector(globalStateMock)).toHaveLength(2);
      expect(getSlicedIncidentsSelector(globalStateMock)).toEqual([
        globalStateMock.incidents[3522],
        globalStateMock.incidents[4853]
      ]);
    });

    it("should return correct value for getIncidentById selector", () => {
      expect(getIncidentById(globalStateMock, { match: { params: { id: 3522 } } })).toEqual(
        globalStateMock.incidents[3522]
      );
    });
  });
});
