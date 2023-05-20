import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import getAuthSelectors from 'redux/auth/selectors';


export const UserMenu = () => {
  const userName = useSelector(getAuthSelectors.selectUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {userName}</p>
      <button onClick={() => dispatch(logOut())}>LogOut</button>
    </div>
  );
};