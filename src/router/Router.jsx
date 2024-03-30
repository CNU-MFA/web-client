import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AddDevice from '../pages/AddDevice';
import Athentication from '../pages/Athentication';
import OTPAthentication from '../pages/OTPAthentication';
import BiometricAthentication from '../pages/BiometricAthentication';
import { NAVIGATION } from '../constants/navigation';

const navigationConfig = {
  [NAVIGATION.LOGIN]: <Login />,
  [NAVIGATION.ADD_DEVICE]: <AddDevice />,
  [NAVIGATION.ATHENTICATION]: <Athentication />,
  [NAVIGATION.OTP_ATHENTICATION]: <OTPAthentication />,
  [NAVIGATION.BIOMETRIC_ATHENTICATION]: <BiometricAthentication />,
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
