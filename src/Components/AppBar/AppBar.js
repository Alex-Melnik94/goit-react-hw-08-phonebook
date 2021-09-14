import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/phonebook/selectors/auth-selectors';
import Navigation from '../Navigation/Navigation';
import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};

export default AppBar;
