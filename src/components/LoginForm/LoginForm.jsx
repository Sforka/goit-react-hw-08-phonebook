import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';


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
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enter</button>
    </form>
  );
};