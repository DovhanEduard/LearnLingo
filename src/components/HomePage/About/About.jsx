import css from './About.module.css';
import RegistrationModal from 'components/Auth/RegistrationModal/RegistrationModal';
import { useState } from 'react';

const About = () => {
  const [isRegModalShow, setIsRegModalShow] = useState(false);

  const openRegModal = () => {
    setIsRegModalShow(true);
  };
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
      <button
        className={css.getStartedBtn}
        type="button"
        onClick={openRegModal}
      >
        Get started
      </button>

      <RegistrationModal
        isRegModalOpen={isRegModalShow}
        setIsRegModalShow={setIsRegModalShow}
      />
    </div>
  );
};

export default About;
