import { AUTHENTICATION } from '../constants/authentication';
import Card from '../components/common/Card';
import Description from '../components/common/Description';
// import Button from '../components/common/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import API from '../api/API';
import { ERROR, SUCCESS } from '../constants/messages';
import instance from '../api/core';
import AuthenticationButton from '../components/AuthenticationButton';
import { NAVIGATION } from '../constants/navigation';

const Authentication = () => {
  const location = useLocation();
  const user = location.state;

  const authenticationConfig = {
    otp: {
      type: 'button',
      text: AUTHENTICATION.OTP,
      navigation: NAVIGATION.OTP_AUTHENTICATION,
    },
    biometric: {
      type: 'button',
      text: AUTHENTICATION.BIOMETRIC,
      navigation: NAVIGATION.BIOMETRIC_AUTHENTICATION,
    },
  };

  return (
    <section>
      <Card size={440} title={AUTHENTICATION.TITLE}>
        <Description text={AUTHENTICATION.DESCRIPTION} />
        <ButtonContainer>
          {Object.entries(authenticationConfig).map(([key, value]) => (
            <AuthenticationButton
              key={key}
              type={value.type}
              navigation={value.navigation}
              text={value.text}
              user={user}
            />
          ))}
        </ButtonContainer>
      </Card>
    </section>
  );
};

export default Authentication;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  & button {
    margin-bottom: 10px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
