import { ATHENTICATION } from '../constants/athentication';
import AthenticationButton from '../components/AthenticationButton';

const Athentication = () => {
  const athentication = {
    otp: {
      key: 1,
      text: ATHENTICATION.OTP,
    },
    biometric: {
      key: 2,
      text: ATHENTICATION.BIOMETRIC,
    },
  };

  return (
    <>
      <h1>{ATHENTICATION.TITLEL}</h1>
      {Object.entries(athentication).map(([key, value]) => (
        <AthenticationButton key={key} text={value.text} />
      ))}
    </>
  );
};

export default Athentication;
