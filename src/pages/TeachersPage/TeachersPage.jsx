import FiltersForm from 'components/TeachersPage/FiltersForm/FiltersForm';
import css from './TeachersPage.module.css';
import TeachersList from 'components/TeachersPage/TeachersList/TeachersList';

const TeachersPage = () => {
  return (
    <section className={css.teachersPage}>
      <div className="container">
        <FiltersForm />
        <TeachersList />
      </div>
    </section>
  );
};

export default TeachersPage;
