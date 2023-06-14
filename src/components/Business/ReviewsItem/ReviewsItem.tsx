import { FC, useState } from "react";
import cls from "./ReviewsItem.module.scss";
import { IReviews } from "../../../models/Entity/IReviews";
import StarsRating from "../../UI/StarsRating/StarsRating";

import editImage from "../../../assets/img/edit.svg";
import deleteImage from "../../../assets/img/delete.svg";
import InfoBlock from "../../Blocks/InfoBlock/InfoBlock";
import ReviewsModal from "../Modals/ReviewsModal/ReviewsModal";
import ReviewsDeleteModal from "../Modals/ReviewsDeleteModal/ReviewsDeleteModal";
interface ReviewsItemProps {
  review: IReviews;
  isAdmin?: boolean;
}

const ReviewsItem: FC<ReviewsItemProps> = ({ review, isAdmin }) => {
  const [isReviewsChangeModalOpen, setIsReviewsChangeModalOpen] =
    useState<boolean>(false);
  const [isReviewsDeleteModalOpen, setIsReviewsDeleteModalOpen] =
    useState<boolean>(false);

  return (
    <>
      {isReviewsChangeModalOpen && (
        <ReviewsModal
          closeMethod={setIsReviewsChangeModalOpen}
          review={review}
          isAdmin={isAdmin}
        />
      )}
      {isReviewsDeleteModalOpen && (
        <ReviewsDeleteModal
          closeMethod={setIsReviewsDeleteModalOpen}
          review={review}
        />
      )}

      <div className={cls.reviewsItem}>
        {isAdmin && (
          <div className={cls.reviewsItemAdminPanel}>
            <img
              src={editImage}
              alt="изменить"
              onClick={() => setIsReviewsChangeModalOpen(true)}
            />
            <img
              src={deleteImage}
              alt="удалить"
              onClick={() => setIsReviewsDeleteModalOpen(true)}
            />
          </div>
        )}
        {isAdmin ? (
          review.isPublished ? (
            <InfoBlock blockType={1}>Опубликован</InfoBlock>
          ) : (
            <InfoBlock blockType={-1}>Не опубликован</InfoBlock>
          )
        ) : (
          <></>
        )}
        <div className={cls.reviewsItemContent}>
          <img
            className={cls.reviewsItemImage}
            src={
              import.meta.env.VITE_API_URL + "/images/reviews/" + review.image
            }
            alt="отзыв"
          />
          <div className={cls.reviewsItemText}>
            <blockquote className="default-text">
              {review.description}
            </blockquote>
            <div className={cls.reviewsItemTextLowerContent}>
              <p className={cls.reviewsItemTextName}>- {review.companyName}.</p>
              <StarsRating rating={Number(review.rating)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsItem;
