import reducer, {
  initialState,
  CHANGE_UI,
  changeUi,
  getCurrentPage,
  getSearchValue,
  getItemsPerPage,
  getLoading,
  getError
} from "./ui";
import globalStateMock from "../mocks/storeMock";

describe("ui redux module", () => {
  describe("ui reducer", () => {
    it("should return default state", () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    it("should return default state for not serviced action", () => {
      expect(reducer(initialState, { type: "SOME_ACTION" })).toEqual(initialState);
    });

    it("should return correct state for CHANGE_UI action", () => {
      expect(
        reducer(initialState, {
          type: CHANGE_UI,
          payload: {
            name: "currentPage",
            value: 1
          }
        })
      ).toEqual({ ...initialState, currentPage: 1 });
    });
  });

  describe("ui actions", () => {
    it("should create correct action by changeUi ", () => {
      const expectedAction = { payload: { name: "currentPage", value: 1 }, type: CHANGE_UI };
      expect(
        changeUi({
          name: "currentPage",
          value: 1
        })
      ).toEqual(expectedAction);
    });
  });

  describe("ui selectors", () => {
    it("should return correct value for getCurrentPage selector", () => {
      expect(getCurrentPage(globalStateMock)).toEqual(globalStateMock.ui.currentPage);
    });
    it("should return correct value for getCurrentPage selector", () => {
      expect(getSearchValue(globalStateMock)).toEqual(globalStateMock.ui.searchValue);
    });
    it("should return correct value for getCurrentPage selector", () => {
      expect(getItemsPerPage(globalStateMock)).toEqual(globalStateMock.ui.itemsPerPage);
    });
    it("should return correct value for getCurrentPage selector", () => {
      expect(getLoading(globalStateMock)).toEqual(globalStateMock.ui.isLoading);
    });
    it("should return correct value for getCurrentPage selector", () => {
      expect(getError(globalStateMock)).toEqual(globalStateMock.ui.error);
    });
  });
});
