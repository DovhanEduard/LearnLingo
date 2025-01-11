import css from './AppBar.module.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router';

const AppBar = () => {
  return (
    <header className={css.header}>
      <Logo />
      <nav>
        <ul className={css.navList}>
          <li>
            <Link className={css.navLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.navLink} to="teachers">
              Teachers
            </Link>
          </li>
        </ul>
      </nav>

      <ul className={css.authListLink}>
        <li>
          <Link className={css.loginLink} to="logIn">
            Log in
          </Link>
        </li>
        <li>
          <Link className={css.regLink} to="registration">
            Registration
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default AppBar;
