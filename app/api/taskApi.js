import axios from 'axios';

const createTask = async ({ data, token }) => {
  return await axios.post(`http://192.168.1.102:5000/api/task/${data.projectId}`, data, {
    headers: {
      'x-access-token': token,
    },
  });
};

const getTaskInfo = async (taskId, token) => {
  return await axios.get(`http://192.168.1.102:5000/api/task/${taskId}`, {
    headers: {
      'x-access-token': token,
    },
  });
};

const deleteTask = async ({ taskId, token }) => {
  return await axios.delete(`http://192.168.1.102:5000/api/task/${taskId}`, {
    headers: {
      'x-access-token': token,
    },
  });
};

const updateTaskInfo = async ({ taskId, data2, token }) => {
  return await axios.put(`http://192.168.1.102:5000/api/task/${taskId}`, data2, {
    headers: {
      'x-access-token': token,
    },
  });
};

export { createTask, getTaskInfo, deleteTask, updateTaskInfo };
