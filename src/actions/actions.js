import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get(
        "https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=boolean"
      )
      .then(res => {
        // res.data.data
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      });
  };
};
