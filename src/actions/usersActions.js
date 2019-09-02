import { GET_USERS } from "./types";

export const getUsers = () => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  return firestore
    .collection("users")
    .get()
    .then(snapshot => {
      const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch({
        type: GET_USERS,
        payload: users
      });
    });
};
