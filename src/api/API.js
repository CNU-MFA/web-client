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
  postVerifyDeviceOTP: async (id, password, registrationOtp) => {
    instance.post({
      method: 'POST',
      url: '/verify-device-otp',
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
