import css from './Logo.module.css';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <div className={css.logoWrapper}>
      <img
        className={css.ukraineFlag}
        src="/img/ukraine-flag.png"
        alt="ukraine flag"
      />
      <Link className={css.logo} to="/">
        LearnLingo
      </Link>
    </div>
  );
};

export default Logo;
