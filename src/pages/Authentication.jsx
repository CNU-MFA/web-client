import styled from 'styled-components';
import { AUTHENTICATION } from '../utils/constants/main';
import { useLocation } from 'react-router-dom';
import Card from '../components/common/Card';
import Description from '../components/common/Description';
import Button from '../components/common/Button';
import { useState, useEffect } from 'react';
import API from '../apis/API';
import { ERROR, SUCCESS } from '../utils/constants/messages';
Button;

const Authentication = () => {
  const [otp, setOtp] = useState('');

  // const location = useLocation();
  // const user = location.state;

  useEffect(() => {
    const handleRequestOTP = async () => {
      const otp = await API.getOTPCode();
      setOtp(otp);
    };
    handleRequestOTP();
  }, []);

  const handleSubmit = async () => {
    const res = await API.getAuthStatus();
    if (!res.ok) {
      alert(ERROR.AUTHENTICATION);
      return;
    }
    alert(SUCCESS.AUTHENTICATION);
  };

  return (
    <section>
      <Card size={440} title={AUTHENTICATION.TITLE}>
        <Description text={AUTHENTICATION.DESCRIPTION} />
        <OTP>{otp}</OTP>
        <ButtonContainer>
          <Button
            type="button"
            text={AUTHENTICATION.SUBMIT}
            onClick={handleSubmit}
          />
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

const OTP = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 40px;
`;
