import axios from 'axios';

const API = {
  postLogin: async (id, password) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/web/auth/login',
        {
          id,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  postAuthStatus: async (id, password) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/web/auth/status',
        {
          id,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return response;
    } catch (error) {
      console.error('Authentication status check failed:', error);
      throw error;
    }
  },
};

export default API;
