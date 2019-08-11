import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_ERROR,
  RECOVER_EMAIL_SENT,
  RECOVER_EMAIL_ERROR
} from "../actions/types";

const initialState = {
  user: null,
  loginError: null,
  registerError: null,
  recoverMsg: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: null
      };
    case REGISTER_ERROR:
      return {
        ...state,
        registerError: action.payload
      };
    case RECOVER_EMAIL_SENT:
      return {
        ...state,
        recoverMsg: action.payload
      };
    case RECOVER_EMAIL_ERROR:
      return {
        ...state,
        registerError: action.payload
      };
    default:
      return state;
  }
}
