import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AddDevice from '../pages/AddDevice';
import Authentication from '../pages/Authentication';
import { NAVIGATION } from '../constants/navigation';
import OTPAuthentication from '../pages/OTPAuthentication';
import BiometricAuthentication from '../pages/BiometricAuthentication';

const navigationConfig = {
  [NAVIGATION.LOGIN]: <Login />,
  [NAVIGATION.ADD_DEVICE]: <AddDevice />,
  [NAVIGATION.AUTHENTICATION]: <Authentication />,
  [NAVIGATION.OTP_AUTHENTICATION]: <OTPAuthentication />,
  [NAVIGATION.BIOMETRIC_AUTHENTICATION]: <BiometricAuthentication />,
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(navigationConfig).map(([path, element]) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
