import { GET_USERS, ADD_TEAM_MEMBER, GET_TEAM_MEMBERS } from "./types";
import history from "../history";
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
export const getTeamMembers = () => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  return firestore
    .collection("team")
    .get()
    .then(snapshot => {
      const team = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch({
        type: GET_TEAM_MEMBERS,
        payload: team
      });
    });
};

export const createTeamMember = ({
  name,
  email,
  role,
  team,
  department,
  toggl = true,
  asana = true,
  greeninvoice = true
}) => (dispatch, getState, { getFirebase, getFirestore }) => {
  console.log({
    name,
    email,
    role,
    team,
    department,
    toggl,
    asana,
    greeninvoice
  });
  const firestore = getFirestore();
  return firestore
    .collection("team")
    .add({ name, email, role, team, department, toggl, asana, greeninvoice })
    .then(doc => {
      dispatch({
        type: ADD_TEAM_MEMBER,
        payload: {
          id: doc.id,
          name,
          email,
          role,
          team,
          department,
          toggl,
          asana,
          greeninvoice
        }
      });

      history.push("/settings/team");
    });
};
