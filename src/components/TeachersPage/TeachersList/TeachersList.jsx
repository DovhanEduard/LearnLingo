import { useDispatch, useSelector } from 'react-redux';
import TeachersListItem from '../TeachersListItem/TeachersListItem';
import css from './TeachersList.module.css';
import { useEffect } from 'react';
import { getTeachers } from '../../../redux/teachers/operations';
import { selectTeachers } from '../../../redux/teachers/selectors';
import { nanoid } from '@reduxjs/toolkit';

const TeachersList = () => {
  const dispatch = useDispatch();

  const teachersList = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(getTeachers());
  }, []);

  return (
    <ul className={css.teachersList}>
      {teachersList.length > 0}
      {teachersList.map(teacher => {
        return (
          <li key={nanoid()} className={css.teachersListItem}>
            <TeachersListItem teacher={teacher} />
          </li>
        );
      })}
    </ul>
  );
};

export default TeachersList;
