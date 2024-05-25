import { Suspense, lazy } from 'react';

import { PATHS } from '@core/constants';
import { withAuth } from '@hocs';

const HomeWrapper = withAuth({
  Component: lazy(() => import('./home').then(module => ({ default: module.Home }))),
  shouldBeAuthenticated: true,
  redirectTo: PATHS.LOGIN_URL,
});

export const LazyHome = () => {
  return (
    <Suspense>
      <HomeWrapper />
    </Suspense>
  );
};
