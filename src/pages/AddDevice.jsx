import { useState } from 'react';
import { ADD_DEVICE } from '../constants/addDevice';
import Card from '../components/common/Card';
import Description from '../components/common/Description';
import styled from 'styled-components';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION } from '../constants/navigation';
import { ERROR } from '../constants/error';

const AddDevice = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setOtp(value);
  };

  const handleSubmit = () => {
    if (otp === '') {
      alert(ERROR.ADD_DEVICE_PROMPT_MESSAGE);
      return;
    }
    navigate(NAVIGATION.ATHENTICATION);
  };

  return (
    <section>
      <Card size={440} title={ADD_DEVICE.TITLE}>
        <DescriptionContainer>
          <Description text={ADD_DEVICE.DESCRIPTION} />
        </DescriptionContainer>
        <Form>
          <Input
            type="text"
            varient="otp"
            placeholder={ADD_DEVICE.OTP_PLACEHOLDER}
            name="otp"
            value={otp}
            onChange={handleChange}
          />
          <Button
            type="button"
            varient="otp"
            onClick={handleSubmit}
            text={ADD_DEVICE.SUBMIT}
          />
        </Form>
      </Card>
    </section>
  );
};

export default AddDevice;

const DescriptionContainer = styled.div`
  margin: 30px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    margin-left: 16px;
  }
`;
