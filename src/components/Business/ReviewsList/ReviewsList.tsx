import { FC, useState } from "react";
import cls from "./ReviewsList.module.scss";
import { reviewsAPI } from "../../../api/ReviewsAPI";
import classNames from "classnames";

import sadSmile from "../../../assets/img/sad-smile.png";
import Loader from "../../UI/Loader/Loader";
import ReviewsItem from "../ReviewsItem/ReviewsItem";
import Pagination from "../../UI/Pagination/Pagination";
import MyButton from "../../UI/MyButton/MyButton";
import ReviewsModal from "../Modals/ReviewsModal/ReviewsModal";

interface ReviewsListProps {}

const ReviewsList: FC<ReviewsListProps> = () => {
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(9);
  const [isReviewsModalActive, setIsReviewsModalActive] =
    useState<boolean>(false);

  let { error, data: reviewsList } = reviewsAPI.useGetReviewsQuery({
    limit,
    page,
  });

  if (error) {
    return (
      <div className={classNames(cls.reviewsList, "container")}>
        <div className={cls.reviewsListTitle}>
          <h2>Отзывы наших клиентов</h2>
          <p className="default-text">
            Здесь вы можете ознакомиться с отзывами, оставленными нашими
            клиентами, которые доверили нам свои проекты и были довольны
            результатами. Мы гордимся нашей репутацией и стараемся предоставлять
            высококачественные услуги, а отзывы наших клиентов помогают нам
            улучшать и развивать нашу деятельность.{" "}
          </p>
        </div>
        <h2 className="error-block">
          Ошибка получения отзывов
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }
  return (
    <>
      {isReviewsModalActive && (
        <ReviewsModal closeMethod={setIsReviewsModalActive} />
      )}
      <div className={classNames(cls.reviewsList, "container")}>
        <div className={cls.reviewsListTitle}>
          <h2>Отзывы наших клиентов</h2>
          <p className="default-text">
            Здесь вы можете ознакомиться с отзывами, оставленными нашими
            клиентами, которые доверили нам свои проекты и были довольны
            результатами. Мы гордимся нашей репутацией и стараемся предоставлять
            высококачественные услуги, а отзывы наших клиентов помогают нам
            улучшать и развивать нашу деятельность.{" "}
          </p>
        </div>
        <MyButton onClick={() => setIsReviewsModalActive(true)}>
          Оставить отзыв
        </MyButton>
        {reviewsList?.rows ? (
          reviewsList?.rows.length > 0 ? (
            <>
              <div className={cls.reviewsListContent}>
                {reviewsList.rows.map((review) => (
                  <ReviewsItem review={review} key={review.id} />
                ))}
              </div>
              <Pagination
                totalCount={reviewsList.count}
                page={page}
                limit={limit}
                changePage={setPage}
              />
            </>
          ) : (
            <h2 className={cls.vacanciesListError}>
              Вакансий не найдено
              <img className="smile-image" src={sadSmile} alt="sad-smile" />
            </h2>
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default ReviewsList;
