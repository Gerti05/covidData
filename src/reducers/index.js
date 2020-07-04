import { combineReducers } from "redux";
import CoronaDataReducer from "./coronaDataReducer";
import CoronaSearchReducer from "./coronaSearchReducer";


export default combineReducers({
  data: CoronaDataReducer, search: CoronaSearchReducer
});