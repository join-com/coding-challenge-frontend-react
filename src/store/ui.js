import { createPrefix, createAction } from "../helpers/actionHelpers";

const initialState = {
  isLoading: false,
  error: null
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

export default reducer;
