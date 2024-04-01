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
  postVerifyOTP: async (id, password, registrationOtp) => {
    instance.post({
      method: 'POST',
      url: '/verify-otp',
      data: {
        id,
        password,
        registrationOtp,
      },
    });
  },
  postVerifyAuthentication: async (id, password) => {
    instance.post({
      method: 'POST',
      url: '/verify-authentication',
      data: {
        id,
        password,
      },
    });
  },
};

export default API;
