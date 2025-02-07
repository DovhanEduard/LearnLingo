import { useDispatch, useSelector } from 'react-redux';
import css from './TeachersFavoriteList.module.css';
import { useEffect, useState } from 'react';
import {
  clearTeachersList,
  getAllTeachers,
} from '../../../redux/teachers/operations';
import {
  selectTeachers,
  selectTeachersIsLoading,
} from '../../../redux/teachers/selectors';
import TeachersFavoriteListItem from '../TeachersFavoriteListItem/TeachersFavoriteListItem';
import { selectAuthUser } from '../../../redux/auth/selectors';
import Loader from 'components/Common/Loader/Loader';

const TeachersFavoriteList = () => {
  const teachersList = useSelector(selectTeachers);
  const user = useSelector(selectAuthUser);

  const [favoritesTeachersList, setFavoritesTeachersList] = useState([]);

  const dispatch = useDispatch();

  const isLoading = useSelector(selectTeachersIsLoading);

  useEffect(() => {
    if (teachersList.length > 0 && user?.email) {
      const favoriteList = teachersList.filter(teacher => {
        const storedValue = localStorage.getItem(
          `selectedTeacher${teacher.id}${user.email}`
        );

        if (!storedValue) return false;

        const isSelectedTeacherId = JSON.parse(storedValue);

        return String(teacher.id) === String(isSelectedTeacherId);
      });

      setFavoritesTeachersList(favoriteList);
    }
  }, [teachersList, user?.email]);

  useEffect(() => {
    dispatch(getAllTeachers());

    return () => {
      dispatch(clearTeachersList());
    };
  }, []);

  return (
    <>
      {favoritesTeachersList.length === 0 ? (
        <div className={css.noFavYetTextWrapper}>
          <p className={css.noFavYetText}>
            You haven&apos;t added anyone to your favorites yet.
          </p>
        </div>
      ) : (
        <ul className={css.teachersList}>
          {favoritesTeachersList.map(teacher => {
            return (
              <li key={teacher.id} className={css.teachersListItem}>
                <TeachersFavoriteListItem
                  teacher={teacher}
                  favoritesTeachersList={favoritesTeachersList}
                  setFavoritesTeachersList={setFavoritesTeachersList}
                />
              </li>
            );
          })}
        </ul>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default TeachersFavoriteList;
