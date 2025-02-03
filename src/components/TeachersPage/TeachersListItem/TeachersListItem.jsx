import css from './TeachersListItem.module.css';
import { MdOutlineStar } from 'react-icons/md';
import { FiBookOpen } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import ReviewsList from '../ReviewsList/ReviewsList';
import { nanoid } from '@reduxjs/toolkit';
import BookModal from '../BookModal/BookModal';

const TeachersListItem = ({ teacher }) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const openBookModal = () => {
    setIsBookModalOpen(true);
  };

  const handleClick = () => {
    setIsReadMoreOpen(!isReadMoreOpen);
  };

  return (
    <>
      <img
        className={css.teacherAvatar}
        src={teacher.avatar_url}
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
              <p className={css.statsText}>
                Lessons done: {teacher.lessons_done}
              </p>
            </li>
            <li className={css.statsListItem}>
              <MdOutlineStar className={css.starIcon} />
              <p className={css.statsText}>Rating: {teacher.rating}</p>
            </li>
            <li className={css.statsListItem}>
              <p className={css.statsText}>
                Price / 1 hour:&nbsp;
                <span className={css.accentColor}>
                  {teacher.price_per_hour}$
                </span>
              </p>
            </li>
          </ul>

          <button className={css.heartButton} type="button">
            <FaRegHeart className={css.heartIcon} />
          </button>
        </div>

        <h2 className={css.teacherName}>
          {teacher.name} {teacher.surname}
        </h2>

        <p className={css.descInfoText}>
          <span className={css.greyText}>Speaks:&nbsp;</span>
          {teacher.languages.join(', ')}
        </p>

        <p className={css.descInfoText}>
          <span className={css.greyText}>Lesson Info:&nbsp;</span>
          {teacher.lesson_info}
        </p>

        <p className={css.descInfoText}>
          <span className={css.greyText}>Conditions:&nbsp;</span>
          {teacher.conditions.join(' ')}
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
            <p className={css.teacherDescription}>{teacher.experience}</p>

            <ReviewsList teacherReviews={teacher.reviews} />
          </div>
        )}

        <ul className={css.languageLevelList}>
          {teacher.levels.map(level => {
            return (
              <li key={nanoid()} className={css.listItem}>
                {level}
              </li>
            );
          })}
        </ul>

        {isReadMoreOpen && (
          <button
            className={css.bookTrialBtn}
            type="button"
            onClick={openBookModal}
          >
            Book trial lesson
          </button>
        )}

        <BookModal
          isBookModalOpen={isBookModalOpen}
          setIsBookModalOpen={setIsBookModalOpen}
          avatar={teacher.avatar_url}
          name={teacher.name}
          surname={teacher.surname}
        />
      </div>
    </>
  );
};

export default TeachersListItem;
