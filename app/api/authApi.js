import axios from 'axios';

const auth = async (data) => {
  return await axios.post('http://192.168.1.101:5000/api/users/auth', data);
};

export { auth };
