import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '@contexts';
import { PATHS } from '@core/constants';

export const UnAuthenticatedLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(PATHS.HOME_URL);
    }
  }, [navigate, user]);

  return <Outlet />;
};
