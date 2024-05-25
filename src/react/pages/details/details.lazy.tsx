import { Suspense, lazy } from 'react';

import { PATHS } from '@core/constants';
import { withAuth } from '@hocs';

const DetailsWrapper = withAuth({
  Component: lazy(() => import('./details').then(module => ({ default: module.Details }))),
  shouldBeAuthenticated: true,
  redirectTo: PATHS.LOGIN_URL,
});

export const LazyDetails = () => {
  return (
    <Suspense>
      <DetailsWrapper />
    </Suspense>
  );
};
