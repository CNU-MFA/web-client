import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AddDevice from '../pages/AddDevice';
import Athentication from '../pages/Athentication';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/addDevice" element={<AddDevice />}></Route>
        <Route path="/athentication" element={<Athentication />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
