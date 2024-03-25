import { useEffect } from 'react';
import { OTP_ATHENTICATION } from '../constants/otpAthentication';
import { generateRandomNumber } from '../utils/generateRandomNumber';
import { useState } from 'react';

const OTPAthentication = () => {
  const [randomNumber, setRandomNumber] = useState();

  useEffect(() => {
    setRandomNumber(generateRandomNumber());
  }, []);

  const handleSubmit = () => {
    console.log(randomNumber);
  };

  return (
    <>
      <h1>{OTP_ATHENTICATION.TITLE}</h1>
      <strong>{randomNumber}</strong>
      <p>{OTP_ATHENTICATION.DESCRIPTION}</p>
      <button type="button" onClick={handleSubmit}>
        {OTP_ATHENTICATION.SUBMIT}
      </button>
    </>
  );
};

export default OTPAthentication;
