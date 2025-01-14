import TeachersListItem from '../TeachersListItem/TeachersListItem';
import css from './TeachersList.module.css';

const TeachersList = () => {
  return (
    <ul className={css.teachersList}>
      <li className={css.teachersListItem}>
        <TeachersListItem />
      </li>
    </ul>
  );
};

export default TeachersList;
