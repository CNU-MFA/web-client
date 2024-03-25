import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AddDevice from '../pages/AddDevice';
import Athentication from '../pages/Athentication';
import OTPAthentication from '../pages/OTPAthentication';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/addDevice" element={<AddDevice />} />
        <Route path="/athentication" element={<Athentication />} />
        <Route path="/otp-athentication" element={<OTPAthentication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
