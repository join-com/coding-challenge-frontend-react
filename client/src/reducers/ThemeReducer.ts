const initialState = {
    nightMode: false,
  };
const SET_NIGHTMODE = "SET_NIGHTMODE";
  
const reducer = (state: any = initialState, action: any) => {
      switch (action.type) {
        case SET_NIGHTMODE: {
          return {
            ...state,
            nightMode: action.nightMode
          }
        }
        default: {
            return state;
        }
      }
  };
export default reducer;
export const setNightMode = (nightMode?: boolean) => ({ type: SET_NIGHTMODE, nightMode })