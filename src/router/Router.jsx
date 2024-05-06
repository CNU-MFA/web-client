import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NAVIGATION } from '../utils/constants/navigation';
import Login from '../pages/Login';
import Authentication from '../pages/Authentication';

const navigationConfig = {
  [NAVIGATION.LOGIN]: Login,
  [NAVIGATION.AUTHENTICATION]: Authentication,
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(navigationConfig).map(([path, Component]) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
