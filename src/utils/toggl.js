var TogglClient = require("toggl-api");
var toggl = new TogglClient({ apiToken: "ad1036e708276431da51861a1cf6bd0a" });

export const getWorkspace = () =>
  new Promise((resolve, reject) => {
    toggl.getWorkspaces((err, data) => {
      console.log(err, data);
      if (err) console.log(err);
      resolve(data[0]);
    });
  });

export const createClient = async ({ name }) => {
  const workplace = await getWorkspace();
  return new Promise((resolve, reject) => {
    toggl.createClient({ name, wid: workplace.id }, (err, newClient) => {
      if (err) reject(err);
      resolve(newClient);
    });
  });
};

export const createProject = async ({ name }, clientID) => {
  const workplace = await getWorkspace();
  return new Promise((resolve, reject) => {
    toggl.createProject(
      { name, wid: workplace.id, cid: clientID, billable: true },
      (err, newProject) => {
        if (err) reject(err);
        resolve(newProject);
      }
    );
  });
};

export const getTogglClientProjects = async clientID => {
  const workplace = await getWorkspace();
  console.log(workplace);
  return new Promise((resolve, reject) => {
    toggl.getWorkspaceProjects(workplace.id, (err, projects) => {
      if (err) reject(err);
      if (!projects) {
        projects = [];
      }
      const clientProjects = projects.filter(
        project => project.cid === clientID
      );
      resolve(clientProjects);
    });
  });
};

export const createTask = async ({ name, uid, hours }, projectID) => {
  console.log({ name, projectID });
  return new Promise((resolve, reject) => {
    toggl.createTask(
      name,
      projectID,
      { name, pid: projectID },
      (err, newTask) => {
        if (err) reject(err);
        resolve(newTask);
      }
    );
  });
};
export const getProjectTasks = async projectID => {
  return new Promise((resolve, reject) => {
    toggl.getProjectTasks(projectID, (err, tasks) => {
      if (err) reject(err);
      resolve(tasks);
    });
  });
};

// export const createTasks = async ({ projectID, data }) => {
//   console.log({ projectID, data });
//   const tasksP = data.map(({ name }) => {
//     console.log({ name, projectID });
//     return createTask({ name }, projectID);
//   });
//   const tasks = await Promise.all(tasksP);
//   return tasks;
// };
