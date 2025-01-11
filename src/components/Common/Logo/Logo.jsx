import css from './Logo.module.css';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <>
      <Link className={css.logo} to="/">
        LearnLingo
      </Link>
    </>
  );
};

export default Logo;
