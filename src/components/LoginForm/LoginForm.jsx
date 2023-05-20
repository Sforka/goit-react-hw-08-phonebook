import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css'


const initialState = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const form = e.currentTarget;

    const { email, password } = state;
    dispatch(logIn({ email, password }));
    // form.reset();
  };

  return (
    <form className={css.Form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={css.Label}>
        Email
        <input
          className={css.InputDataLogIn}
          type="email"
          name="email"
          onChange={handleChange}
        />
      </label>
      <label className={css.Label}>
        Password
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <button className={css.LogInBTN} type="submit">
        Enter
      </button>
    </form>
  );
};