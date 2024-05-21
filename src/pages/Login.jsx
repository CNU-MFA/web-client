import { useState } from 'react';
import { LOGIN } from '../utils/constants/main';
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

  const handleSuccessfulLogin = (res) => {
    if (res.ok) {
      navigate(NAVIGATION.AUTHENTICATION, { state: { ...user } });
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
    const res = await API.postLogin(user.id, user.password);
    handleSuccessfulLogin(res);
  };

  return (
    <Card size={440} title={LOGIN.TITLE}>
      <Form>
        <div>
          <Input
            type="text"
            variant="login"
            id="id"
            label={LOGIN.USER_ID}
            placeholder={LOGIN.USER_ID_PLACEHOLDER}
            name="id"
            onChange={handleChange}
          />
          <Input
            type="password"
            variant="login"
            id="password"
            label={LOGIN.USER_PASSWORD}
            placeholder={LOGIN.USER_PW_PLACEHOLDER}
            name="password"
            onChange={handleChange}
          />
        </div>
        <Button
          type="button"
          variant="login"
          onClick={handleSubmit}
          text={LOGIN.SUBMIT}
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
