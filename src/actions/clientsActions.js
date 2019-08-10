import { GET_CLIENTS, ADD_CLIENT, GET_CLIENT, EDIT_CLIENT } from "./types";
import history from "../history";
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
export const getClient = id => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  return firestore
    .collection("clients")
    .doc(id)
    .get()
    .then(doc => {
      dispatch({
        type: GET_CLIENT,
        payload: { id: doc.id, ...doc.data() }
      });
    });
};
export const addClient = newClient => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  return firestore
    .collection("clients")
    .add(newClient)
    .then(snapshot => {
      dispatch({
        type: ADD_CLIENT,
        payload: { id: snapshot.id, ...newClient }
      });
      history.push("/clients");
    });
};

export const editClient = (id, updClient) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  return firestore
    .collection("clients")
    .doc(id)
    .update(updClient)
    .then(doc => {
      dispatch({
        type: EDIT_CLIENT,
        payload: { id, ...updClient }
      });
    });
};
