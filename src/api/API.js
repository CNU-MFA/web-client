import instance from './core';

const API = {
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
  postSetOTP: async (id, password, otp) => {
    instance.post({
      method: 'POST',
      url: '/set-otp',
      data: {
        id,
        password,
        otp,
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
