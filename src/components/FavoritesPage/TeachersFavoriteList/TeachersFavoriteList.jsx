import { useDispatch, useSelector } from 'react-redux';
import css from './TeachersFavoriteList.module.css';
import { useEffect } from 'react';
import {
  clearTeachersList,
  getAllTeachers,
} from '../../../redux/teachers/operations';
import { selectTeachers } from '../../../redux/teachers/selectors';
import TeachersFavoriteListItem from '../TeachersFavoriteListItem/TeachersFavoriteListItem';
import { selectAuthUser } from '../../../redux/auth/selectors';

const TeachersFavoriteList = () => {
  const dispatch = useDispatch();

  const teachersList = useSelector(selectTeachers);
  const user = useSelector(selectAuthUser);

  const favoritesTeachersList = teachersList.filter(teacher => {
    const storedValue = localStorage.getItem(
      `selectedTeacher${teacher.id}${user.email}`
    );

    if (!storedValue) return false;

    const isSelectedTeacherId = JSON.parse(storedValue);

    return String(teacher.id) === String(isSelectedTeacherId);
  });

  useEffect(() => {
    dispatch(getAllTeachers());

    return () => {
      dispatch(clearTeachersList());
    };
  }, []);

  return (
    <ul className={css.teachersList}>
      {favoritesTeachersList?.map(teacher => {
        return (
          <li key={teacher.id} className={css.teachersListItem}>
            <TeachersFavoriteListItem teacher={teacher} />
          </li>
        );
      })}
    </ul>
  );
};

export default TeachersFavoriteList;
