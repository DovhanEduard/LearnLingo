import { Link } from 'react-router';
import css from './About.module.css';

const About = () => {
  return (
    <div className={css.background}>
      <h1 className={css.title}>
        Unlock your potential with the best&nbsp;
        <span className={css.colorAccent}>language</span> tutors
      </h1>
      <p className={css.textDesc}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <Link className={css.link} to="/registration">
        Get started
      </Link>
    </div>
  );
};

export default About;
