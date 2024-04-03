import styled from 'styled-components';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Description from '../components/common/Description';
import { BIOMETRIC_AUTHENTICATION } from '../constants/main';
import { useLocation } from 'react-router-dom';
import { ERROR, SUCCESS } from '../constants/messages';
import instance from '../api/core';
import API from '../api/API';

const BiometricAuthentication = () => {
  const location = useLocation;

  const user = location.state;

  const handleSubmit = async () => {
    const res = await API.postVerifyAuthentication(user.id, user.password);
    if (res.ok) {
      onLoginSuccess(res);
      alert(SUCCESS.AUTHENTICATION);
      return;
    }
    alert(ERROR.AUTHENTICATION);
  };

  const onLoginSuccess = (res) => {
    const access_token = res.headers.authorization;
    instance.defaults.headers.common['Authorization'] =
      `Bearer ${access_token}`;
  };

  return (
    <section>
      <Card size={440} title={BIOMETRIC_AUTHENTICATION.TITLE}>
        <Description text={BIOMETRIC_AUTHENTICATION.DESCRIPTION} />
        <ButtonContainer>
          <Button
            type="button"
            variant="enter"
            onClick={handleSubmit}
            text={BIOMETRIC_AUTHENTICATION.SUBMIT}
          />
        </ButtonContainer>
      </Card>
    </section>
  );
};

export default BiometricAuthentication;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    margin-bottom: 10px;
  }
`;
