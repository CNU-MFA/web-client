import instance from './core';

const API = {
  postLogin: async (id, password) => {
    instance.post({
      method: 'POST',
      url: '/web/login',
      data: {
        id,
        password,
      },
    });
  },
  getOTPCode: async () => {
    instance.get({
      method: 'GET',
      url: '/web/auth/otp',
    });
  },
  getAuthStatus: async () => [
    instance.get({
      method: 'GET',
      url: '/web/auth/status',
    }),
  ],
};

export default API;
