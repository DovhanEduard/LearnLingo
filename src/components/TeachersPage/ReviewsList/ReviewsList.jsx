import { nanoid } from '@reduxjs/toolkit';
import ReviewsListItem from '../ReviewsListItem/ReviewsListItem';
import css from './ReviewsList.module.css';

const ReviewsList = ({ teacherReviews }) => {
  return (
    <ul className={css.reviewsList}>
      {teacherReviews.map(review => {
        return (
          <li key={nanoid()} className={css.reviewsListItem}>
            <ReviewsListItem review={review} />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
