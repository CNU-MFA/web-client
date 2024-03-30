import { useState } from 'react';
import { LOGIN } from '../constants/login';
import LoginInput from '../components/auth/LoginInput';
import LoginButton from '../components/auth/LoginButton';
import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { ERROR } from '../constants/error';
import { NAVIGATION } from '../constants/navigation';
import Card from '../components/common/Card';

const Login = () => {
  const navigate = useNavigate();

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
    if (user.id === '' || user.password === '') {
      alert(ERROR.LOGIN_PROMPT_MESSAGE);
      return;
    }
    navigate(NAVIGATION.ADD_DEVICE);
  };

  return (
    <section>
      <LogoContainer src={Logo} alt="충남대학교 로고" />
      <Card size={440} title={LOGIN.TITLE}>
        <Form>
          <div>
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
          </div>
          <LoginButton
            type="button"
            onClick={handleSubmit}
            text={LOGIN.SUBMIT}
          />
        </Form>
      </Card>
    </section>
  );
};

export default Login;

const LogoContainer = styled.img`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 10%);
  max-width: 600px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    margin-bottom: 10px;
  }

  & div:last-of-type {
    margin-bottom: 0;
  }
`;
