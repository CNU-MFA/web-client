import instance from './core';

const API = {
  postLogin: async (id, password) => {
    instance.post({
      method: 'POST',
      url: '/web/auth/login',
      data: {
        id,
        password,
      },
    });
  },
  postAuthStatus: async (id, password) => [
    instance.get({
      method: 'POST',
      url: '/web/auth/status',
      data: {
        id,
        password,
      },
    }),
  ],
};

export default API;
