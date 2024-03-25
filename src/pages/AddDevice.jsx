import { useState } from 'react';
import { ADD_DEVICE } from '../constants/addDevice';

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
    <>
      <h1>{ADD_DEVICE.TITLE}</h1>
      <div>Google Play QR코드</div>
      <div>App Store QR코드</div>
      <p>{ADD_DEVICE.DESCRIPTION}</p>
      <form>
        <input
          type="text"
          placeholder={ADD_DEVICE.OTP_PLACEHOLDER}
          name="otp"
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>
          {ADD_DEVICE.SUBMIT}
        </button>
      </form>
    </>
  );
};

export default AddDevice;
