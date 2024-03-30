import { useState } from 'react';
import { LOGIN } from '../constants/login';
import LoginInput from '../components/auth/LoginInput';
import LoginButton from '../components/auth/LoginButton';
import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

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
      alert('모든 정보를 입력해주세요.');
      return;
    }
    navigate('/add-device');
  };

  return (
    <section>
      <LogoContainer src={Logo} alt="충남대학교 로고" />
      <Form>
        <Title>{LOGIN.TITLE}</Title>
        <FormInnerContainer>
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
        </FormInnerContainer>
      </Form>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: 440px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.7);
  color: #333;
  padding: 20px;
`;

const FormInnerContainer = styled.div`
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

const Title = styled.h1`
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 10px;
`;
