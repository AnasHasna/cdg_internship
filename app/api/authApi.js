import axios from 'axios';

const auth = async (data) => {
  return await axios.post('http://192.168.1.101:5000/api/users/auth', data);
};
const register = async (data) => {
  return await axios.post('http://192.168.1.101:5000/api/users/register', data);
};
const forgetPassword = async (data) => {
  return await axios.post('http://192.168.1.101:5000/api/users/forgetpassword', data);
};
const resetPassword = async (data) => {
  return await axios.put('http://192.168.1.101:5000/api/users/forgetpassword', data);
};

export { auth, register, forgetPassword, resetPassword };
