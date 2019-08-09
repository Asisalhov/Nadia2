import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clientsReducer from "./clientsReducer";

export default combineReducers({
  auth: authReducer,
  client: clientsReducer
});
