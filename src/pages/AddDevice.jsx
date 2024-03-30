import { useState } from 'react';
import { ADD_DEVICE } from '../constants/addDevice';
import Card from '../components/common/Card';
import Description from '../components/common/Description';
import styled from 'styled-components';
import Input from '../components/common/Input';

const AddDevice = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtp({
      ...otp,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(otp);
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
            placeholder={ADD_DEVICE.OTP_PLACEHOLDER}
            name="otp"
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            {ADD_DEVICE.SUBMIT}
          </button>
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
`;
