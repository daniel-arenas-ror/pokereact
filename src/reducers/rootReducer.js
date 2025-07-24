import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice";
import uiReducer from "../slices/uiSlice";

export default combineReducers({
  data: dataReducer,
  ui: uiReducer,
});
