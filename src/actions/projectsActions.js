import { GET_PROJECTS, ADD_PROJECT, GET_PROJECT, EDIT_PROJECT } from "./types";
import history from "../history";

export const getProjects = () => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  return firestore
    .collection("projects")
    .get()
    .then(snapshot => {
      const projects = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch({
        type: GET_PROJECTS,
        payload: projects
      });
    });
};
export const getProject = id => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  return firestore
    .collection("projects")
    .doc(id)
    .get()
    .then(doc => {
      dispatch({
        type: GET_PROJECT,
        payload: { id: doc.id, ...doc.data() }
      });
    });
};
export const addProject = newProject => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  return firestore
    .collection("projects")
    .add(newProject)
    .then(snapshot => {
      dispatch({
        type: ADD_PROJECT,
        payload: { id: snapshot.id, ...newProject }
      });
      history.push("/projects");
    });
};

export const editProject = (id, updProject) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  return firestore
    .collection("projects")
    .doc(id)
    .update(updProject)
    .then(doc => {
      dispatch({
        type: EDIT_PROJECT,
        payload: { id, ...updProject }
      });
    });
};
