import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import themeReducer from "./themeReducer";
import loadingOverlayReducer from "./loadingOverlayReducer";

export default combineReducers({
  globalReducer,
  themeReducer,
  loadingOverlayReducer,
});
