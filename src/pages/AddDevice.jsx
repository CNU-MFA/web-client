import styled from 'styled-components';
import { ADD_DEVICE } from '../constants/main';
import { NAVIGATION } from '../constants/navigation';
import { ERROR } from '../constants/messages';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '../components/common/Card';
import Description from '../components/common/Description';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import API from '../api/API';

const AddDevice = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state;
  const [registrationOtp, setRegistrationOtp] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setRegistrationOtp(value);
  };

  const isInputValid = () => {
    return registrationOtp === '';
  };

  const handleInvalidOTP = () => {
    alert(ERROR.INVALID_OTP_CODE);
  };

  const handleVerifyOTP = (res) => {
    if (res.ok) {
      navigate(NAVIGATION.AUTHENTICATION, { state: { ...user } });
      return;
    }
    handleInvalidOTP();
  };

  const handleSubmit = async () => {
    if (isInputValid()) {
      alert(ERROR.ADD_DEVICE_PROMPT_MESSAGE);
      return;
    }
    const res = await API.postVerifyDeviceOTP(
      user.id,
      user.password,
      registrationOtp,
    );
    handleVerifyOTP(res);
  };

  return (
    <section>
      <Card size={440} title={ADD_DEVICE.TITLE}>
        <Description text={ADD_DEVICE.DESCRIPTION} />
        <Form>
          <Input
            type="text"
            variant="otp"
            placeholder={ADD_DEVICE.OTP_PLACEHOLDER}
            name="otp"
            value={registrationOtp}
            onChange={handleChange}
          />
          <Button
            type="button"
            variant="otp"
            onClick={handleSubmit}
            text={ADD_DEVICE.SUBMIT}
          />
        </Form>
      </Card>
    </section>
  );
};

export default AddDevice;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  & button {
    margin-left: 16px;
  }
`;
