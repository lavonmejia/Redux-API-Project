import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions";

const initialState = {
  questions: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        questions: action.payload,
        error: ""
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
