import { useSelector } from 'react-redux';
import getAuthSelectors from 'redux/auth/selectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css'


export const AppBar = () => {
  const isLoggedIn = useSelector(getAuthSelectors.selectIsLoggedIn);

  return (
    <div className={css.Container}>
      <header className={css.Header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};