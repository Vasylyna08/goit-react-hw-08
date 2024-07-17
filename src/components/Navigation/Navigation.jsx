import css from './Navigation.module.css';
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getNavLinkClassNames = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <div>
      <nav>
        <NavLink className={getNavLinkClassNames} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={getNavLinkClassNames} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
