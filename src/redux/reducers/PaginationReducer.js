import { SET_CURRENT_PAGE } from "../actions/PaginationActions";

const initialState = {
  currentPage:0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage};
    }
    default:
      return state;
  }
}

export const getCurrentPage = state => state.pagination.currentPage;