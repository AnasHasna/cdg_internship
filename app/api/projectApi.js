import axios from 'axios';

const createProject = async ({ data, token }) => {
  return await axios.post('http://192.168.1.102:5000/api/project', data, {
    headers: {
      'x-access-token': token,
    },
  });
};

const getProjects = async (id, token) => {
  return await axios.get(`http://192.168.1.102:5000/api/project/${id}`, {
    headers: {
      'x-access-token': token,
    },
  });
};

const getProjectInfo = async (id, token) => {
  return await axios.get(`http://192.168.1.102:5000/api/project/info/${id}`, {
    headers: {
      'x-access-token': token,
    },
  });
};

const addUserToProject = async ({ data, token }) => {
  return await axios.put('http://192.168.1.102:5000/api/project/addUser', data, {
    headers: {
      'x-access-token': token,
    },
  });
};

export { createProject, getProjects, addUserToProject, getProjectInfo };
