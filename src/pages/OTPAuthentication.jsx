import styled from 'styled-components';
import { OTP_AUTHENTICATION } from '../constants/main';
import { SUCCESS } from '../constants/messages';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { generateOTPCode } from '../utils/generateOTPCode';
import Card from '../components/common/Card';
import Description from '../components/common/Description';
import Button from '../components/common/Button';
import instance from '../api/core';
import API from '../api/API';

const OTPAuthentication = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [otp, setOtp] = useState('');
  const user = location.state;

  const handleRequestSetOTP = async () => {
    await API.postSetOTP(user.id, user.password, otp);
  };

  useEffect(() => {
    const handleRequestOTP = async () => {
      const otp = generateOTPCode();
      setOtp(otp);
      await handleRequestSetOTP();
    };
    handleRequestOTP();
  }, []);

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
      <Card size={440} title={OTP_AUTHENTICATION.TITLE}>
        <OTP>{otp}</OTP>
        <Description text={OTP_AUTHENTICATION.DESCRIPTION} />
        <ButtonContainer>
          <Button
            type="button"
            variant="enter"
            onClick={handleSubmit}
            text={OTP_AUTHENTICATION.SUBMIT}
          />
        </ButtonContainer>
      </Card>
    </section>
  );
};

export default OTPAuthentication;

const OTP = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    margin-bottom: 10px;
  }
`;
