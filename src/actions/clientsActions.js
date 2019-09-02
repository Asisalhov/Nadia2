import { GET_CLIENTS, ADD_CLIENT, GET_CLIENT, EDIT_CLIENT } from "./types";
import history from "../history";
import {
  createClient as createTogglClient,
  getTogglClientProjects
} from "../utils/toggl";
export const getClients = () => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  return firestore
    .collection("clients")
    .get()
    .then(async snapshot => {
      const clientP = snapshot.docs.map(async doc => {
        const client = { id: doc.id, ...doc.data() };
        client.projects = await getTogglClientProjects(client.togglID);
        return client;
      });
      const clients = await Promise.all(clientP);
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
export const addClient = newClient => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const togglClient = await createTogglClient({
    name: newClient.official_name
  });
  newClient.togglID = togglClient.id;

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
