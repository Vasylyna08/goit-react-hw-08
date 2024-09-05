import css from './UserMenu.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations.js';
import { selectUser } from '../../redux/auth/selectors.js';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.container}>
      <p className={css.text}>
        Welcome, <span className={css.span}>{user.email}</span>
      </p>
      <button className={css.button} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
