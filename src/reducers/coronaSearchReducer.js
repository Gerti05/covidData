const coronaSearchReducer = (state = null, action) => {
    switch (action.type) {
      case "FETCH_SEARCH_DATA":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default coronaSearchReducer;
  