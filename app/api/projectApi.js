import axios from 'axios';

const createProject = async ({ data, token }) => {
  console.log(token);
  return await axios.post('http://192.168.8.31:5000/api/project', data, {
    headers: {
      'x-access-token': token,
    },
  });
};

export { createProject };
