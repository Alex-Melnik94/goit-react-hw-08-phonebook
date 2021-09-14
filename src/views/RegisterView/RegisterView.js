import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/phonebook/operations/auth-operations';
import styles from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'name') {
      setName(e.target.value);
    }
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
