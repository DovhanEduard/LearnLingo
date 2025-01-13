import css from './AdvantagesList.module.css';

const AdvantagesList = () => {
  return (
    <ul className={css.advantagesList}>
      <li className={css.listItem}>
        <p className={css.textCount}>32,000 +</p>
        <p className={css.textDesc}>Experienced tutors</p>
      </li>
      <li className={css.listItem}>
        <p className={css.textCount}>300,000 +</p>
        <p className={css.textDesc}>5-star tutor reviews</p>
      </li>
      <li className={css.listItem}>
        <p className={css.textCount}>120 +</p>
        <p className={`${css.textDesc} ${css.textDescAccent}`}>
          Subjects taught
        </p>
      </li>
      <li className={css.listItem}>
        <p className={css.textCount}>200 +</p>
        <p className={css.textDesc}>Tutor nationalities</p>
      </li>
    </ul>
  );
};

export default AdvantagesList;
