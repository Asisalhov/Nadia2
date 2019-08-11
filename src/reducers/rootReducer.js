import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clientsReducer from "./clientsReducer";
// import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
export default combineReducers({
  auth: authReducer,
  clients: clientsReducer,
  // firestore: firestoreReducer, // for realtime data
  firebase: firebaseReducer
});
