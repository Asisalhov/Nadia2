import asana from "asana";
import config from "../config/apis";
const { asana_token } = config;
const client = asana.Client.create().useAccessToken(asana_token);
export const getMe = () => {
  client.users.me().then(function(me) {
    console.log(me);
  });
};
export const getProjects = async () => {
  const res = await client.workspaces.findAll();
  console.log(res.data);
  const workplace = res.data[0];
  const projectsRes = await client.projects.findByWorkspace(workplace.id);
  console.log(projectsRes.data);
  return projectsRes.data;
};

export const createProject = async data => {
  const res = await client.workspaces.findAll();
  const workplace = res.data[0];

  const projectsRes = await client.projects.createInWorkspace(workplace, data);
  console.log(projectsRes.data);
  return projectsRes.data;
};
export const createTask = async (projectid, data) => {
  const res = await client.workspaces.findAll();
  const workplace = res.data[0];
  // add the project id in the data object
  const projectsRes = await client.tasks.createInWorkspace(workplace, data);
  console.log(projectsRes.data);
  return projectsRes.data;
};
