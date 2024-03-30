// get
// export const getUserInfo = (userID) => {
//   return request({ url: `gerUserInfo/${userID}` });
// };

// post
export const postLogin = (id, password) => {
  request({
    method: 'POST',
    url: '/login',
    data: {
      id,
      password,
    },
  });
};
