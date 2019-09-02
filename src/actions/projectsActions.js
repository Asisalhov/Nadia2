import { GET_PROJECTS, ADD_PROJECT, GET_PROJECT, EDIT_PROJECT } from "./types";
import history from "../history";
import {
  createProject as createAsanaProject,
  createTasks as createAsanaTasks,
  client as asana
} from "../utils/asana";

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
      const projects = snapshot.docs.map(async doc => {
        const project = { id: doc.id, ...doc.data() };
        const asanaData = await asana.projects.findById(project.asanaProjectID);
        console.log(asanaData);
      });

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

export const addProject = newProject => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const firebase = getFirebase();
  const storageRef = firebase.storage().ref("/attachments");
  const {
    project_name: name,
    due_date,
    comments: notes,
    phases,
    owner
  } = newProject;
  console.log(due_date);

  const asanaProject = await createAsanaProject({
    name,
    notes,
    due_date,
    owner
  });
  // if attachments : upload it
  if (newProject.attachment) {
    const attachmentImage = await storageRef
      .child(newProject.attachment.name)
      .put(newProject.attachment);
    newProject.attachment = await attachmentImage.ref.getDownloadURL();
  }

  const asanaProjectID = asanaProject.gid;
  const tasks = await createAsanaTasks({
    projectID: asanaProjectID,
    data: phases
  });
  const asanaTasksIds = tasks.map(task => task.gid);

  // create toggl Project

  // create nadia project

  const project = {
    ...newProject,
    asanaProjectID,
    asanaTasksIds
  };
  return firestore
    .collection("projects")
    .add(project)
    .then(snapshot => {
      dispatch({
        type: ADD_PROJECT,
        payload: { id: snapshot.id, ...project }
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
