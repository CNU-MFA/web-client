import { BIOMETRIC_ATHENTICATION } from '../constants/biometricAthentication';

const BiometricAthentication = () => {
  return (
    <>
      <h1>{BIOMETRIC_ATHENTICATION.TITLE}</h1>
      <p>{BIOMETRIC_ATHENTICATION.DESCRIPTION}</p>
      <button type="button">{BIOMETRIC_ATHENTICATION.SUBMIT}</button>
    </>
  );
};

export default BiometricAthentication;
