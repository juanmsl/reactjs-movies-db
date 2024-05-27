import { Outlet } from 'react-router-dom';

import { AuthenticatedLayoutStyle } from './authenticated-layout.style';

import { Navbar } from '@components/ui';

export const AuthenticatedLayout = () => {
  return (
    <AuthenticatedLayoutStyle>
      <section className='main-layout-content'>
        <Navbar />
        <section className='main-layout-outlet'>
          <Outlet />
        </section>
      </section>
    </AuthenticatedLayoutStyle>
  );
};
