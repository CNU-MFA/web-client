import { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ERROR } from '../utils/constants/messages';
import { NAVIGATION } from '../utils/constants/navigation';
import Card from '../components/common/Card';
import API from '../apis/API';

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

  const isInputValid = () => {
    return user.id === '' || user.password === '';
  };

  const handleSuccessfulLogin = async () => {
    const res = await API.postLogin(user.id, user.password);
    const { isOk, otp } = res;
    
    if (isOk) {
      navigate(NAVIGATION.AUTHENTICATION, { state: { ...user, otp } });
      return;
    }
    alert(ERROR.LOGIN_NOT_USER);
  };

  const displayLoginPrompt = () => {
    alert(ERROR.LOGIN_PROMPT_MESSAGE);
  };

  const handleSubmit = async () => {
    if (isInputValid()) {
      displayLoginPrompt();
      return;
    }

    await handleSuccessfulLogin();
  };

  return (
    <Card size={440} title="포털시스템 로그인">
      <Form>
        <div>
          <Input
            type="text"
            variant="login"
            id="id"
            label="포털시스템 로그인"
            placeholder="로그인ID"
            name="id"
            onChange={handleChange}
          />
          <Input
            type="password"
            variant="login"
            id="password"
            label="비밀번호"
            placeholder="비밀번호"
            name="password"
            onChange={handleChange}
          />
        </div>
        <Button
          type="button"
          variant="login"
          onClick={handleSubmit}
          text="로그인"
        />
      </Form>
    </Card>
  );
};

export default Login;

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
