import { signInWithGoogle, auth } from "../config/firebase";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  REGISTER_ERROR,
  RECOVER_EMAIL_SENT,
  RECOVER_EMAIL_ERROR
} from "./types";
export const googleLogin = () => dispatch => {
  signInWithGoogle().then(user => {
    // save to firebase
  });
};
export const login = ({ email, password }) => dispatch => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err
      });
    });
};
export const register = ({
  firstName,
  lastName,
  username,
  email,
  password
}) => (dispatch, getState, { getFirebase, getFirestore }) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // save to firebase
      const firestore = getFirestore();
      firestore
        .collections("users")
        .doc(user.uid)
        .set({
          firstName,
          lastName,
          username,
          email
        })
        .then(_ => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { firstName, lastName, username, email }
          });
        });
    })
    .catch(err =>
      dispatch({
        type: REGISTER_ERROR,
        payload: err
      })
    );
};
export const logout = () => dispatch => {
  auth.signOut().then(
    dispatch({
      type: LOGOUT
    })
  );
};
export const sendRecoverCode = email => dispatch => {
  auth
    .sendPasswordResetEmail(email)
    .then(res => {
      dispatch({
        type: RECOVER_EMAIL_SENT,
        payload: {
          error: false,
          message: "Reset link Sent"
        }
      });
    })
    .catch(err =>
      dispatch({
        type: RECOVER_EMAIL_ERROR,
        payload: {
          error: true,
          message: err.message
        }
      })
    );
};
