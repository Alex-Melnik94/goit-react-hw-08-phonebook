import { NavLink } from 'react-router-dom';
import styles from './AuthMenu.module.css';

export default function AuthMenu() {
  return (
    <div>
      <NavLink
        to="/register"
        className={styles.navLink}
        activeClassName={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={styles.navLink}
        activeClassName={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}
