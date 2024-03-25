import { ATHENTICATION } from '../constants/athentication';

const Athentication = () => {
  return (
    <>
      <h1>{ATHENTICATION.TITLEL}</h1>
      <button type="button">{ATHENTICATION.OTP}</button>
      <button type="button">{ATHENTICATION.BIOMETRIC}</button>
    </>
  );
};

export default Athentication;
