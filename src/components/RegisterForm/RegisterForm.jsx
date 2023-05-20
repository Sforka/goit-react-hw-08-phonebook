import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="current-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};