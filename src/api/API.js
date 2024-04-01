import instance from './core';

const API = {
  getJoke: async () => {
    return await instance.get('/categories');
  },
  postLogin: async (id, password) => {
    instance.post({
      method: 'POST',
      url: '/login',
      data: {
        id,
        password,
      },
    });
  },
  postVerifyOTP: async (otp) => {
    instance.post({
      method: 'POST',
      url: '/verify-otp',
      data: {
        otp,
      },
    });
  },
};

export default API;
