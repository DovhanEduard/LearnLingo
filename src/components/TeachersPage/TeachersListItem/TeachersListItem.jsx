import css from './TeachersListItem.module.css';
import { MdOutlineStar } from 'react-icons/md';
import { FiBookOpen } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import ReviewsList from '../ReviewsList/ReviewsList';

const TeachersListItem = () => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const handleClick = () => {
    setIsReadMoreOpen(!isReadMoreOpen);
  };

  return (
    <>
      <img
        className={css.teacherAvatar}
        src="/img/teacher-avatar.png"
        alt="Teacher avatar"
      />

      <div className={css.wrapper}>
        <div className={css.statsWrapper}>
          <p className={css.greyLangText}>Languages</p>

          <ul className={css.statsList}>
            <li className={css.statsListItem}>
              <FiBookOpen className={css.icon} />
              <p className={css.statsText}>Lessons online</p>
            </li>
            <li className={css.statsListItem}>
              <p className={css.statsText}>Lessons done: 1098</p>
            </li>
            <li className={css.statsListItem}>
              <MdOutlineStar className={css.starIcon} />
              <p className={css.statsText}>Rating: 4.8</p>
            </li>
            <li className={css.statsListItem}>
              <p className={css.statsText}>
                Price / 1 hour: <span className={css.accentColor}>30$</span>
              </p>
            </li>
          </ul>

          <button className={css.heartButton} type="button">
            <FaRegHeart className={css.heartIcon} />
          </button>
        </div>

        <h2 className={css.teacherName}>Jane Smith</h2>

        <p className={css.descInfoText}>
          <span className={css.greyText}>Speaks:&nbsp;</span>German, French
        </p>

        <p className={css.descInfoText}>
          <span className={css.greyText}>Lesson Info:&nbsp;</span>Lessons are
          structured to cover grammar, vocabulary, and practical usage of the
          language.
        </p>

        <p className={css.descInfoText}>
          <span className={css.greyText}>Conditions:&nbsp;</span>Welcomes both
          adult learners and teenagers (13 years and above).Provides
          personalized study plans.
        </p>

        {!isReadMoreOpen && (
          <button
            type="button"
            onClick={handleClick}
            className={css.readMoreBtn}
          >
            Read more
          </button>
        )}

        {isReadMoreOpen && (
          <div className={css.descriptionWrapper}>
            <p className={css.teacherDescription}>
              Jane is an experienced and dedicated language teacher specializing
              in German and French. She holds a Bachelor&apos;s degree in German
              Studies and a Master&apos;s degree in French Literature. Her
              passion for languages and teaching has driven her to become a
              highly proficient and knowledgeable instructor. With over 10 years
              of teaching experience, Jane has helped numerous students of
              various backgrounds and proficiency levels achieve their language
              learning goals. She is skilled at adapting her teaching methods to
              suit the needs and learning styles of her students, ensuring that
              they feel supported and motivated throughout their language
              journey.
            </p>

            <ReviewsList />
          </div>
        )}

        <ul className={css.languageLevelList}>
          <li className={css.listItem}>#A1 Beginner</li>
          <li className={css.listItem}>#A2 Elementary</li>
        </ul>

        {isReadMoreOpen && (
          <button className={css.bookTrialBtn} type="button">
            Book trial lesson
          </button>
        )}
      </div>
    </>
  );
};

export default TeachersListItem;
