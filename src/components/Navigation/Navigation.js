import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
export const Navigation = () => {
  return (
    <nav>
      <ul className={css.List}>
        <li className={css.Item}>
          <NavLink className={css.StyledLink} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.Item}>
          <NavLink className={css.StyledLink} to="/contacts">
            PhoneBook
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};