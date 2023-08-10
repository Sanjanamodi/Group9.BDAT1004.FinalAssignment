import { combineReducers } from "redux";
import { graphSlice } from "./userReducer";
import { themeSlice } from "./themeReducer";

export default combineReducers({
  theme: themeSlice.reducer,
  graph: graphSlice.reducer,
});
