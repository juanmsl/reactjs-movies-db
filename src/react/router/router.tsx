import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { MainLayout } from '@components/layouts';
import { AuthenticatedLayout } from '@components/layouts/authenticated-layout';
import { PATHS } from '@core/constants';
import { LazyDetails, LazyHome, LazyLogin } from '@pages';

export const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.key}>
        <Route element={<MainLayout />}>
          <Route path={PATHS.LOGIN_URL} element={<LazyLogin />} />
          <Route element={<AuthenticatedLayout />}>
            <Route path={PATHS.HOME_URL} element={<LazyHome />} />
            <Route path={PATHS.DETAILS_URL} element={<LazyDetails />} />
            <Route path='*' element={<Navigate to={PATHS.HOME_URL} />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
