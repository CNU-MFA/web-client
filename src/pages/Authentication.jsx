import { AUTHENTICATION } from '../constants/authentication';
import Card from '../components/common/Card';
import Description from '../components/common/Description';
import Button from '../components/common/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import API from '../api/API';
import { ERROR, SUCCESS } from '../constants/messages';
import instance from '../api/core';

const Authentication = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state;
  const [authenticationStatus, setAuthenticationStatus] = useState(false);

  const handleRequest = () => {
    // 앱으로 noti + authentication state: true
    setAuthenticationStatus(true);
  };

  const handleSuccess = async () => {
    const res = await API.postVerifyAuthentication(user.id, user.password);
    handleVerifyAuthentication(res);
  };

  const handleVerifyAuthentication = (res) => {
    if (res.ok) {
      onLoginSuccess(res);
      alert(SUCCESS.AUTHENTICATION);
      return;
    }
    displayAuthenticationError();
  };

  const onLoginSuccess = (res) => {
    const access_token = res.headers.authorization;
    instance.defaults.headers.common['Authorization'] =
      `Bearer ${access_token}`;
  };

  const displayAuthenticationError = () => {
    alert(ERROR.AUTHENTICATION);
  };

  return (
    <section>
      <Card size={440} title={AUTHENTICATION.TITLE}>
        <Description
          text={
            authenticationStatus
              ? AUTHENTICATION.SUCCESS_DESCRIPTION
              : AUTHENTICATION.REQUEST_DESCRIPTION
          }
        />
        <ButtonContainer>
          <Button
            type="button"
            variant="authentication"
            onClick={authenticationStatus ? handleSuccess : handleRequest}
            text={
              authenticationStatus
                ? AUTHENTICATION.SUCCESS
                : AUTHENTICATION.REQUEST
            }
          />
        </ButtonContainer>
      </Card>
    </section>
  );
};

export default Authentication;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
