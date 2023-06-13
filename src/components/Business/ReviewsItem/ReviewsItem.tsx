import { FC } from "react";
import cls from "./ReviewsItem.module.scss";
import { IReviews } from "../../../models/Entity/IReviews";
import stars from "../../../assets/img/stars.png";

interface ReviewsItemProps {
  review: IReviews;
}

const ReviewsItem: FC<ReviewsItemProps> = ({ review }) => {
  return (
    <div className={cls.reviewsItem}>
      <img
        className={cls.reviewsItemImage}
        src={import.meta.env.VITE_API_URL + "/images/reviews/" + review.image}
        alt="отзыв"
      />
      <div className={cls.reviewsItemText}>
        <blockquote className="default-text">{review.description}</blockquote>
        <div className={cls.reviewsItemTextLowerContent}>
          <p className={cls.reviewsItemTextName}>- {review.companyName}.</p>
          <img src={stars} alt="5 звезд" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsItem;
