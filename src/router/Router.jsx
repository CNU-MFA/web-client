import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AddDevice from '../pages/AddDevice';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/addDevice" element={<AddDevice />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
