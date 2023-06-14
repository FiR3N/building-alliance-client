import { FC, Dispatch, SetStateAction, useEffect } from "react";
import cls from "./ReviewsDeleteModal.module.scss";
import { IReviews } from "../../../../models/Entity/IReviews";
import { reviewsAPI } from "../../../../api/ReviewsAPI";
import Modal from "../../../UI/Modal/Modal";
import classNames from "classnames";
import MyButton from "../../../UI/MyButton/MyButton";

interface ReviewsDeleteModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  review: IReviews;
}

const ReviewsDeleteModal: FC<ReviewsDeleteModalProps> = ({
  closeMethod,
  review,
}) => {
  const [deleteReview, { isSuccess, isError }] =
    reviewsAPI.useDeleteReviewsMutation();

  const deleteReviewsHandler = async () => {
    await deleteReview({ id: review.id });
  };

  useEffect(() => {
    if (isSuccess) {
      closeMethod(false);
    }
  }, [isSuccess]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.reviewsDeleteModal}>
        <h2 className={cls.reviewsDeleteModalTitle}>
          Вы точно уверенны, что хотите удалить данный отзыв?
        </h2>
        {isError && (
          <p className={classNames(cls.reviewsDeleteModalError, "error-text")}>
            Ошибка при удалении!
          </p>
        )}
        <p className="default-text">
          <span className="bold-text">Номер отзыва:</span> {review.id}
        </p>
        <p className="default-text">
          <span className="bold-text">Содержание отзыва:</span>{" "}
          {review.description}
        </p>
        <p className="default-text">
          <span className="bold-text">Оценка отзыва:</span> {review.rating}
        </p>
        <p className="default-text">
          <span className="bold-text">Был обупликован:</span>{" "}
          {review.isPublished ? "да" : "нет"}
        </p>
        <img
          src={import.meta.env.VITE_API_URL + "/images/reviews/" + review.image}
          alt={`reviews-${review.id}`}
        />
        <MyButton onClick={deleteReviewsHandler}>Да</MyButton>
      </div>
    </Modal>
  );
};

export default ReviewsDeleteModal;
