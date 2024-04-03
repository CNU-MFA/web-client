import { NAVIGATION } from '../constants/navigation';
import AddDevice from '../pages/AddDevice';
import Login from '../pages/Login';
import Authentication from '../pages/Authentication';
import OTPAuthentication from '../pages/OTPAuthentication';
import BiometricAuthentication from '../pages/BiometricAuthentication';

export const navigationConfig = {
  [NAVIGATION.LOGIN]: Login,
  [NAVIGATION.ADD_DEVICE]: AddDevice,
  [NAVIGATION.AUTHENTICATION]: Authentication,
  [NAVIGATION.OTP_AUTHENTICATION]: OTPAuthentication,
  [NAVIGATION.BIOMETRIC_AUTHENTICATION]: BiometricAuthentication,
};
