import { Suspense, lazy } from 'react';

import { PATHS } from '@core/constants';
import { withAuth } from '@hocs';

const LoginWrapper = withAuth({
  Component: lazy(() => import('./login').then(module => ({ default: module.Login }))),
  shouldBeAuthenticated: false,
  redirectTo: PATHS.HOME_URL,
});

export const LazyLogin = () => {
  return (
    <Suspense>
      <LoginWrapper />
    </Suspense>
  );
};
