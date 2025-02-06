import css from './TeachersFavoriteListItem.module.css';
import { MdOutlineStar } from 'react-icons/md';
import { FiBookOpen } from 'react-icons/fi';
import { LuHeart } from 'react-icons/lu';

import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import {
  selectAuthIsLoggedIn,
  selectAuthUser,
} from '../../../redux/auth/selectors';
import toast, { Toaster } from 'react-hot-toast';
import ReviewsList from 'components/TeachersPage/ReviewsList/ReviewsList';
import BookModal from 'components/TeachersPage/BookModal/BookModal';

const TeachersFavoriteListItem = ({ teacher }) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);

  const [isSelected, setIsSelected] = useState(() => {
    const selectedId = JSON.parse(
      localStorage.getItem(`selectedTeacher${teacher.id}${user.email}`)
    );

    const isSelected = Boolean(selectedId);

    if (selectedId === 0 || isSelected) {
      return true;
    }
    return false;
  });

  const selectFavoriteTecher = () => {
    const toggleSelect = !isSelected;

    if (isLoggedIn !== true) {
      console.log('here');

      toast.error('You need to be sign in', {
        id: 'uniqueToast',
        duration: 3000,
        position: 'top-center',
      });
    }

    if (toggleSelect === false) {
      localStorage.removeItem(`selectedTeacher${teacher.id}${user.email}`);
    } else {
      localStorage.setItem(
        `selectedTeacher${teacher.id}${user.email}`,
        teacher.id
      );
    }

    setIsSelected(toggleSelect);
  };

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

          <button
            className={css.heartButton}
            type="button"
            onClick={selectFavoriteTecher}
          >
            <LuHeart
              className={clsx(css.heartIcon, {
                [css.isSelected]: isLoggedIn && isSelected,
              })}
            />
          </button>

          <Toaster
            toastOptions={{
              className: 'toast',
              style: {
                border: 'none',
                padding: '12px',
                color: '#fff',
                background: '#121417',
                borderRadius: 12,
                height: 48,
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.25,
              },
            }}
          />
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

export default TeachersFavoriteListItem;
