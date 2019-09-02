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
    .then(async snapshot => {
      const projectsP = snapshot.docs.map(async doc => {
        const project = { id: doc.id, ...doc.data() };
        project.asanaData = await asana.projects.findById(
          project.asanaProjectID
        );
        console.log(project.asanaData);
        return project;
      });
      // archived: false
      // color: null
      // created_at: "2019-09-01T01:28:07.035Z"
      // current_status: null
      // custom_fields: []
      // due_date: null
      // due_on: null
      // followers: [{…}]
      // gid: "1137974439660807"
      // id: 1137974439660807
      // is_template: false
      // layout: "board"
      // members: [{…}]
      // modified_at: "2019-09-01T01:28:13.920Z"
      // name: "new project"
      // notes: "comments"
      // owner: {id: 1137029218328833, gid: "1137029218328833", name: "Mustapha lounici", resource_type: "user"}
      // public: true
      // resource_type: "project"
      // section_migration_status: "completed"
      // start_on: null
      // workspace: {id: 1137029220879543, gid: "1137029220879543", name: "nadia", resource_type: "workspace"}
      // __proto__: Object
      const projects = await Promise.all(projectsP);
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
