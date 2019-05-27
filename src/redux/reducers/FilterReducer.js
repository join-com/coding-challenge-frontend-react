import { SET_FROM, SET_KEYWORD, SET_TO } from "../actions/FilterActions";

const initialState = {
  keyword: "",
  from: "",
  to: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_KEYWORD: {
      return {...state, keyword: action.keyword};
    }
    case SET_TO: {
      return {...state, to: action.to};
    }
    case SET_FROM: {
      return {...state, from: action.from};
    }
    default:
      return state;
  }
}
