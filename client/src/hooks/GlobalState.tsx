export const initialState = {
  loading: false,
  numberOfElements: '-'
};

export const SET_LOADING = "SET_LOADING";
export const SET_NUMBEROFELEMENTS = "SET_NUMBEROFELEMENTS";

export const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "reset": {
        return initialState;
      }
      case SET_LOADING: {
          return {
              ...state,
              loading: action.loading,
          };
      }
      case SET_NUMBEROFELEMENTS: {
        return {
          ...state,
          numberOfElements: action.numberOfElements,
        }
      }
      default: {
          return state;
      }
    }
};
