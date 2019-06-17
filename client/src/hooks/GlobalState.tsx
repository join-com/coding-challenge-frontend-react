export const initialState = {
  loading: false,
};

export const SET_LOADING = "SET_LOADING";

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
      default: {
          return state;
      }
    }
};
