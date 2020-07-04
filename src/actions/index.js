import coronaApi from "../api/coronaApi";

export const fetchData = () => {
  return async (dispatch) => {
    const response = await coronaApi.get("/summary");
    dispatch({
      type: "FETCH_DATA",
      payload: response.data,
    });
  };
};

export const fetchSearchData = (e) => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_SEARCH_DATA",
      payload: e,
    });
  };
};