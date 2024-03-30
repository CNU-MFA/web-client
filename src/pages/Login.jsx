import { useState } from 'react';
import { LOGIN } from '../constants/login';
import LoginInput from '../components/auth/LoginInput';
import LoginButton from '../components/auth/LoginButton';

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
      <form>
        <h1>{LOGIN.TITLE}</h1>
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
        <LoginButton type="button" onClick={handleSubmit} text={LOGIN.SUBMIT} />
      </form>
    </>
  );
};

export default Login;
