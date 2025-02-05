import FiltersForm from 'components/TeachersPage/FiltersForm/FiltersForm';
import css from './TeachersPage.module.css';
import TeachersList from 'components/TeachersPage/TeachersList/TeachersList';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getTeachers } from '../../redux/teachers/operations';
import { selectTeachersHasNextPage } from '../../redux/teachers/selectors';

const TeachersPage = () => {
  const dispatch = useDispatch();
  const hasNextPage = useSelector(selectTeachersHasNextPage);

  const [page, setPage] = useState(1);

  const onLoadMoreHandler = () => {
    const nextPage = page + 1;

    setPage(nextPage);

    dispatch(getTeachers(nextPage));
  };

  return (
    <section className={css.teachersPage}>
      <div className="container">
        <FiltersForm />
        <TeachersList />

        {hasNextPage && (
          <div className={css.btnWrapper}>
            <button
              className={css.loadMoreBtn}
              type="button"
              onClick={onLoadMoreHandler}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeachersPage;
