import { OTP_ATHENTICATION } from '../constants/otpAthentication';

const OTPAthentication = () => {
  // 난수 생성 로직

  return (
    <>
      <h1>{OTP_ATHENTICATION.TITLE}</h1>
      <strong></strong>
      <p>{OTP_ATHENTICATION.DESCRIPTION}</p>
      <button type="button">{OTP_ATHENTICATION.SUBMIT}</button>
    </>
  );
};

export default OTPAthentication;
