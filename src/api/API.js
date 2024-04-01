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
};

export default API;
