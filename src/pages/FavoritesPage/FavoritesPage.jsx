import css from './FavoritesPage.module.css';
import TeachersFavoriteList from 'components/FavoritesPage/TeachersFavoriteList/TeachersFavoriteList';

const FavoritesPage = () => {
  return (
    <section className={css.teachersFavPage}>
      <div className="container">
        <TeachersFavoriteList />
      </div>
    </section>
  );
};

export default FavoritesPage;
