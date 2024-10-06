import axios from 'axios';

const API = {
  postLogin: async (id, password) => {
    axios.post('http://localhost:8080/web/auth/login', {
      method: 'POST',
      data: {
        id,
        password,
      },
    });
  },
  postAuthStatus: async (id, password) => {
    axios.post('http://localhost:8080/web/auth/status', {
      method: 'POST',
      data: {
        id,
        password,
      },
    });
  },
};

export default API;
