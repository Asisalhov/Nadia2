import { signInWithGoogle, auth, firestore as db } from "../config/firebase";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  REGISTER_ERROR,
  RECOVER_EMAIL_SENT,
  RECOVER_EMAIL_ERROR
} from "./types";
import { getToken as getGreenInvoiceToken } from "../utils/greenInvoice";

export const googleLogin = () => async dispatch => {
  const res = await signInWithGoogle();
  await verifyGreenInvoiceToken();
  // save to firebase

  const doc = await db
    .collection("users")
    .doc(res.user.uid)
    .get();
  if (!doc.exists) {
    await db
      .collection("users")
      .doc(res.user.uid)
      .set({
        firstName: res.additionalUserInfo.profile.given_name,
        lastName: res.additionalUserInfo.profile.family_name,
        email: res.additionalUserInfo.profile.email
      });
  }
  dispatch({
    type: LOGIN_SUCCESS,
    payload: {
      firstName: res.additionalUserInfo.profile.given_name,
      lastName: res.additionalUserInfo.profile.family_name,
      email: res.additionalUserInfo.profile.email
    }
  });
};

export const login = ({ email, password }) => async dispatch => {
  await verifyGreenInvoiceToken();
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
export const register = ({ firstName, lastName, email, password }) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    await verifyGreenInvoiceToken();
    // save to firebase

    await res.user.updateProfile({ displayName: `${firstName} ${lastName}` });

    await db
      .collection("users")
      .doc(res.user.uid)
      .set({
        firstName,
        lastName,
        email
      });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { firstName, lastName, email }
    });
  } catch (error) {
    dispatch({
      type: REGISTER_ERROR,
      payload: error
    });
  }
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

export const verifyGreenInvoiceToken = async () => {
  const greenInvoice = JSON.parse(localStorage.getItem("greenInvoice"));
  if (greenInvoice) {
    const { token, expires } = greenInvoice;

    const currentTime = Date.now() / 1000;
    if (expires < currentTime) {
      const { token, expires } = await getGreenInvoiceToken();
      saveGreenInvoiceToken({ token, expires });
    }
  } else {
    const { token, expires } = await getGreenInvoiceToken();
    saveGreenInvoiceToken({ token, expires });
  }
};

const saveGreenInvoiceToken = ({ token, expires }) => {
  localStorage.setItem("greenInvoice", JSON.stringify({ token, expires }));
};
