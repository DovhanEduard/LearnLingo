import css from './ReviewsListItem.module.css';
import { MdOutlineStar } from 'react-icons/md';

const ReviewsListItem = ({ review }) => {
  return (
    <div>
      <div className={css.reviewsAvatarWrapper}>
        <img src="/img/reviewImg.png" alt="review avatar" />
        <div>
          <p className={css.reviewerName}>{review.reviewer_name}</p>

          <p className={css.rating}>
            <MdOutlineStar className={css.starIcon} />
            {review.reviewer_rating}.0
          </p>
        </div>
      </div>
      <p>{review.comment}</p>
    </div>
  );
};

export default ReviewsListItem;
