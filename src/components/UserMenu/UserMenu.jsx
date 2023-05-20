import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import getAuthSelectors from 'redux/auth/selectors';
import css from './UserMenu.module.css'


export const UserMenu = () => {
  const userName = useSelector(getAuthSelectors.selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.MenuWrapper}>
      <p className={css.WelcomeUser}>Welcome, {userName}</p>
      <button className={css.LogOutBTN} onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};