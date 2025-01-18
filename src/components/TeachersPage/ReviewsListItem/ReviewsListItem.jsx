import css from './ReviewsListItem.module.css';
import { MdOutlineStar } from 'react-icons/md';

const ReviewsListItem = () => {
  return (
    <div>
      <div className={css.reviewsAvatarWrapper}>
        <img src="/img/reviewImg.png" alt="review avatar" />
        <div>
          <p className={css.reviewerName}>Frank</p>

          <p className={css.rating}>
            <MdOutlineStar className={css.starIcon} />
            4.0
          </p>
        </div>
      </div>
      <p>Jane&apos;s lessons were very helpful. I made good progress.</p>
    </div>
  );
};

export default ReviewsListItem;
