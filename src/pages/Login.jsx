import { useState } from 'react';
import { LOGIN } from '../constants/login';

const Login = () => {
  const [user, setUser] = useState({
    userId: '',
    userPw: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(user);
  };

  return (
    <>
      <h1>{LOGIN.TITLE}</h1>
      <form>
        <label htmlFor="userId">{LOGIN.USER_ID}</label>
        <input
          type="text"
          id="userId"
          placeholder={LOGIN.USER_ID_PLACEHOLDER}
          name="userId"
          onChange={handleChange}
        />
        <label htmlFor="userPw">{LOGIN.USER_PASSWORD}</label>
        <input
          type="password"
          id="userPw"
          placeholder={LOGIN.USER_PW_PLACEHOLDER}
          name="userPw"
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>
          {LOGIN.SUBMIT}
        </button>
      </form>
    </>
  );
};

export default Login;
