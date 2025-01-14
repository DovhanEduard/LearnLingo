import css from './AppBar.module.css';
import Logo from '../Logo/Logo';
import { MdLogin } from 'react-icons/md';
import { Link } from 'react-router';

const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={css.headerWrapper}>
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
          <li className={css.loginItem}>
            <Link className={css.loginLink} to="logIn">
              <MdLogin className={css.loginIcon} />
              Log in
            </Link>
          </li>
          <li>
            <Link className={css.regLink} to="registration">
              Registration
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppBar;
