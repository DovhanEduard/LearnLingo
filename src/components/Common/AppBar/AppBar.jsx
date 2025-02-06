import css from './AppBar.module.css';
import Logo from '../Logo/Logo';
import { MdLogin } from 'react-icons/md';
import { NavLink } from 'react-router';
import RegistrationModal from 'components/Auth/RegistrationModal/RegistrationModal';
import { useState } from 'react';
import LoginModal from 'components/Auth/LoginModal/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/auth/operations';
import {
  selectAuthIsLoggedIn,
  selectAuthUser,
} from '../../../redux/auth/selectors';

const AppBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  const [isLoginModalShow, setIsLoginModalShow] = useState(false);
  const [isRegModalShow, setIsRegModalShow] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalShow(true);
  };

  const openRegModal = () => {
    setIsRegModalShow(true);
  };

  const onLogoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className={css.header}>
      <div className={css.headerWrapper}>
        <Logo />
        <nav>
          <ul className={css.navList}>
            <li>
              <NavLink className={css.navLink} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.navLink} to="teachers">
                Teachers
              </NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <NavLink className={css.navLink} to="favorites">
                  Favorites
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        {isLoggedIn ? (
          <div className={css.loggedInBar}>
            <p className={css.userNameWrapper}>
              Hi, <span className={css.userName}>{user.name}</span>!
            </p>
            <button
              className={css.logoutBtn}
              type="button"
              onClick={onLogoutHandler}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className={css.authListBtn}>
            <button
              className={css.loginBtn}
              type="button"
              onClick={openLoginModal}
            >
              <MdLogin className={css.loginIcon} />
              Log in
            </button>

            <button className={css.regBtn} type="button" onClick={openRegModal}>
              Registration
            </button>
          </div>
        )}
      </div>

      <LoginModal
        isLoginModalOpen={isLoginModalShow}
        setIsLoginModalShow={setIsLoginModalShow}
      />

      <RegistrationModal
        isRegModalOpen={isRegModalShow}
        setIsRegModalShow={setIsRegModalShow}
      />
    </header>
  );
};

export default AppBar;
