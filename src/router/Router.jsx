import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { navigationConfig } from '../config/navigationConfig';

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
