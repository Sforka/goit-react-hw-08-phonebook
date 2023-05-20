import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css'

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
 };

  return (
    <form className={css.Form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={css.Label}>
        Username
        <input
          className={css.InputDataLogIn}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.Label}>
        Email
        <input
          className={css.InputDataLogIn}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={css.Label}>
        Password
        <input
          className={css.InputDataLogIn}
          type="current-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button className={css.RegisterBTN} type="submit">
        Register
      </button>
    </form>
  );
};