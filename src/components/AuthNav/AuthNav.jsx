import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const AuthNav = () => {
  const getNavLinkClassNames = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <div>
      <nav>
        <NavLink className={getNavLinkClassNames} to="/register">
          Registration
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/login">
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
