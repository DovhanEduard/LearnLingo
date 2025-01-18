import ReviewsListItem from '../ReviewsListItem/ReviewsListItem';
import css from './ReviewsList.module.css';

const ReviewsList = () => {
  return (
    <ul className={css.reviewsList}>
      <li className={css.reviewsListItem}>
        <ReviewsListItem />
      </li>
    </ul>
  );
};

export default ReviewsList;
