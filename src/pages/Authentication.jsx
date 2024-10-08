import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import Description from '../components/common/Description';
import Button from '../components/common/Button';
import { useState, useEffect } from 'react';
import API from '../apis/API';
import { ERROR, SUCCESS } from '../utils/constants/messages';
Button;

const Authentication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [otp, setOtp] = useState(data.otp);

  useEffect(() => {
    setOtp(otp);
  }, [otp]);

  const handleSubmit = async () => {
    const res = await API.postAuthStatus(data.id, data.password);
    const { status } = res.data;

    if (status === 'PASSED') {
      alert(SUCCESS.AUTHENTICATION);
      return;
    } else if (status === 'NOT_PASSED') {
      return alert(ERROR.AUTHENTICATION);
    } else {
      alert(ERROR.RETRY);
      navigate('/');
    }
  };

  return (
    <section>
      <Card size={440} title="2차 인증">
        <Description
          text={`모바일 앱에서 \n OTP 인증 또는 생체인식 인증을 진행해주세요.`}
        />
        <OTP>{otp}</OTP>
        <ButtonContainer>
          <Button type="button" text="인증 완료" onClick={handleSubmit} />
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
