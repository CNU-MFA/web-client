import { NAVIGATION } from '../constants/navigation';
import { AUTHENTICATION } from '../constants/main';

export const authenticationConfig = {
  otp: {
    type: 'button',
    text: AUTHENTICATION.OTP,
    navigation: NAVIGATION.OTP_AUTHENTICATION,
  },
  biometric: {
    type: 'button',
    text: AUTHENTICATION.BIOMETRIC,
    navigation: NAVIGATION.BIOMETRIC_AUTHENTICATION,
  },
};
