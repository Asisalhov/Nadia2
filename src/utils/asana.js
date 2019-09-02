import asana from "asana";
import config from "../config/apis";
const { asana_token } = config;

/**
 * Asana API
 * used for :
 * Projects managment :
 *  CURD.
 *  tasks or paheses : CURD,
 *
 *
 *
 */

export const client = asana.Client.create().useAccessToken(asana_token);

export const getMe = () => {
  client.users.me().then(function(me) {
    console.log(me);
  });
};
// projects **********

export const getProjects = async () => {
  const res = await client.workspaces.findAll();
  const workplace = res.data[0];

  const projectsRes = await client.projects.findByWorkspace(workplace.id);
  return projectsRes.data;
};

export const createProject = async data => {
  const { name, notes, due_date, owner } = data;
  const res = await client.workspaces.findAll();
  const workplace = res.data[0];

  const projectsRes = await client.projects.createInWorkspace(workplace.id, {
    name,
    notes,
    color: "light-green",
    current_status: { color: "green", text: "new" }
    // owner
  });
  // await client.projects.addMembers(projectsRes.gid, [owner]);
  console.log({ projectsRes });
  return projectsRes;
};

/// tasks
export const createTasks = async ({ projectID, data }) => {
  const res = await client.workspaces.findAll();
  const workplace = res.data[0];
  // add the project id in the data object
  // client.tasks.addProject();
  let tasksP = data.map(async ({ name, owner, due_date, hours, number }) => {
    const task = await client.tasks.createInWorkspace(workplace.id, {
      name,
      due_on: due_date
    });
    await client.tasks.addProject(task.gid, { project: projectID });
    return task;
  });

  const tasks = await Promise.all(tasksP);

  return tasks;
};
