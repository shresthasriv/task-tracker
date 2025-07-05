export const saveUser = (username) => {
  localStorage.setItem('taskTrackerUser', username);
};

export const getUser = () => {
  return localStorage.getItem('taskTrackerUser');
};

export const removeUser = () => {
  localStorage.removeItem('taskTrackerUser');
};

export const saveTasks = (tasks) => {
  localStorage.setItem('taskTrackerTasks', JSON.stringify(tasks));
};

export const getTasks = () => {
  const tasks = localStorage.getItem('taskTrackerTasks');
  return tasks ? JSON.parse(tasks) : [];
};

export const clearTasks = () => {
  localStorage.removeItem('taskTrackerTasks');
};
