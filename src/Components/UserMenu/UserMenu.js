import React from 'react';

import authSelectors from '../../redux/phonebook/selectors/auth-selectors';
import authOperations from '../../redux/phonebook/operations/auth-operations';
import { useSelector, useDispatch } from 'react-redux';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={styles.container}>
      <p className={styles.text}>Welcome, {name}</p>
      <button
        onClick={() => dispatch(authOperations.logOut())}
        className={styles.btn}
        type="button"
      >
        Logout
      </button>
    </div>
  );
}
