import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clientsReducer from "./clientsReducer";
// import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import projectsReducer from "./projectsReducer";
import usersReducer from "./usersReducer";
import settingsReducer from "./settingsReducer";
export default combineReducers({
  auth: authReducer,
  clients: clientsReducer,
  projects: projectsReducer,
  users: usersReducer,
  settings: settingsReducer,
  // firestore: firestoreReducer, // for realtime data
  firebase: firebaseReducer
});
