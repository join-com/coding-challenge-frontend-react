import { createPrefix, createAction } from "../helpers/actionHelpers";

const initialState = {
  isLoading: false,
  error: null,
  searchValue: ""
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
export const getLoading = state => state.ui.isLoading;
export const getError = state => state.ui.error;
export const getSearchValue = state => state.ui.searchValue;

export default reducer;
