import { GET_TEXT_REQUEST, GET_TEXT_SUCCESS, GET_TEXT_FAILURE } from "./Home.actionTypes";


export interface IHomeState {
  request: boolean,
  text: string,
  error: typeof Error | null
}

export const initialState: IHomeState = {
  request: false,
  text: '',
  error: null
}

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEXT_REQUEST: 
      return {
        ...state,
        request: true
      }
    case GET_TEXT_SUCCESS:
      return {
        ...state,
        request: false,
        text: action.data
      }

    case GET_TEXT_FAILURE:
        return {
          ...state,
          request: false,
          error: action.error
        }
  
    default:
      return state
  }
}
