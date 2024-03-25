import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AddDevice from '../pages/AddDevice';
import Athentication from '../pages/Athentication';
import OTPAthentication from '../pages/OTPAthentication';
import BiometricAthentication from '../pages/BiometricAthentication';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add-device" element={<AddDevice />} />
        <Route path="/athentication" element={<Athentication />} />
        <Route path="/otp-athentication" element={<OTPAthentication />} />
        <Route path="/biometric-athentication" element={<BiometricAthentication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
