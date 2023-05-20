import { useSelector } from 'react-redux';
import getAuthSelectors from 'redux/auth/selectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';


export const AppBar = () => {
  const isLoggedIn = useSelector(getAuthSelectors.selectIsLoggedIn);

  return (
    <div>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};