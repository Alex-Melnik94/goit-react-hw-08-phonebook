import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/phonebook/selectors/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        to="/"
        className={styles.navLink}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={styles.navLink}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
