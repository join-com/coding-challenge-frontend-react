import { createPrefix, createAction } from "../helpers/actionHelpers";
import { INCIDENTS_PER_PAGE } from "../constants/global";

export const initialState = {
  isLoading: false,
  currentPage: 0,
  searchValue: "",
  error: null,
  itemsPerPage: INCIDENTS_PER_PAGE
};

const prefix = createPrefix("UI");

export const CHANGE_UI = prefix("CHANGE_UI");
export const changeUi = createAction(CHANGE_UI);

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_UI:
      const { name, value } = payload;
      return {
        ...state,
        [name]: value
      };

    default:
      return state;
  }
};

// selectors
export const getCurrentPage = state => state.ui.currentPage;
export const getSearchValue = state => state.ui.searchValue;
export const getItemsPerPage = state => state.ui.itemsPerPage;
export const getLoading = state => state.ui.isLoading;
export const getError = state => state.ui.error;

export default reducer;
