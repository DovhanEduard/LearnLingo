import { useDispatch, useSelector } from 'react-redux';
import TeachersListItem from '../TeachersListItem/TeachersListItem';
import css from './TeachersList.module.css';
import { useEffect } from 'react';
import {
  clearTeachersList,
  getTeachers,
} from '../../../redux/teachers/operations';
import { selectTeachers } from '../../../redux/teachers/selectors';

const TeachersList = () => {
  const dispatch = useDispatch();

  const teachersList = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(getTeachers());

    return () => {
      dispatch(clearTeachersList());
    };
  }, []);

  return (
    <ul className={css.teachersList}>
      {teachersList.map(teacher => {
        return (
          <li key={teacher.id} className={css.teachersListItem}>
            <TeachersListItem teacher={teacher} />
          </li>
        );
      })}
    </ul>
  );
};

export default TeachersList;
