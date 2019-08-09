import { GET_CLIENTS } from "./types";

export const getClients = () => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  return firestore
    .collection("clients")
    .get()
    .then(snapshot => {
      const clients = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch({
        type: GET_CLIENTS,
        payload: clients
      });
    });
};
