import axios from 'axios';

const createTask = async ({ data, token }) => {
  return await axios.post(`http://192.168.1.102:5000/api/task/${data.projectId}`, data, {
    headers: {
      'x-access-token': token,
    },
  });
};

export { createTask };
