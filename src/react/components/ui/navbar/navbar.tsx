import { Icon, Image, Tooltip, Typography } from '@juanmsl/ui';
import { Link, NavLink } from 'react-router-dom';

import { NavbarStyle } from './navbar.style';

import { useAuth } from '@contexts';
import { PATHS } from '@core/constants';

export const Navbar = () => {
  const { logout } = useAuth();

  return (
    <NavbarStyle>
      <section className='navbar-top'>
        <Link to={PATHS.HOME_URL} className='navbar-logo-container'>
          <Image className='navbar-logo' src='/assets/images/logo.png' alt='logo' />
          <Typography variant='body' weight='bold' className='navbar-title'>
            57Blocks | Movies
          </Typography>
        </Link>
        <section className='navbar-options'>
          <Tooltip position='right' content='Home'>
            <NavLink className='navbar-options--link' to={PATHS.HOME_URL}>
              <Icon name='house' />
            </NavLink>
          </Tooltip>
        </section>
      </section>
      <section className='section-bottom'>
        <Tooltip position='right' content='Logout'>
          <span className='modal-logout' onClick={logout}>
            <Icon name='door-open' />
          </span>
        </Tooltip>
      </section>
    </NavbarStyle>
  );
};
