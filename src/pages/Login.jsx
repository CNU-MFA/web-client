import { useState } from 'react';
import { LOGIN } from '../constants/login';
import LoginInput from '../components/LoginInput';

const Login = () => {
  const [user, setUser] = useState({
    id: '',
    password: '',
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
        <LoginInput
          type="text"
          id="id"
          label={LOGIN.USER_ID}
          placeholder={LOGIN.USER_ID_PLACEHOLDER}
          name="id"
          onChange={handleChange}
        />
        <LoginInput
          type="password"
          id="password"
          label={LOGIN.USER_PASSWORD}
          placeholder={LOGIN.USER_PW_PLACEHOLDER}
          name="password"
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
