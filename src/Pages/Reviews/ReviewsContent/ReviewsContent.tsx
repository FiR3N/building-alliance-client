import { FC } from "react";
import cls from "../Reviews.module.scss";
import classNames from "classnames";
import review1 from "../../../assets/img/review1.jpg";

interface ReviewsContentProps {}

const ReviewsContent: FC<ReviewsContentProps> = () => {
  return (
    <div className={cls.reviews}>
      <div className={classNames(cls.reviewsContent, "container")}>
        <div className={cls.reviewsTitle}>
          <h2>Мнение наших клиентов</h2>
          <p className="default-text">
            Здесь вы можете ознакомиться с отзывами, оставленными нашими
            клиентами, которые доверили нам свои проекты и были довольны
            результатами. Мы гордимся нашей репутацией и стараемся предоставлять
            высококачественные услуги, а отзывы наших клиентов помогают нам
            улучшать и развивать нашу деятельность.{" "}
          </p>
        </div>

        <div className={cls.reviewsItems}>
          <div className={cls.reviewsItem}>
            <img
              className={cls.reviewsItemImage}
              src={review1}
              alt="review  "
            />
            <div className={cls.reviewsItemText}>
              <blockquote className="default-text">
                "Мы заказали Building Alliance для ремонта нашей квартиры, и они
                были очень профессиональны и добросовестны в своей работе. Они
                выполнили работу вовремя и оставили все в чистоте после себя. Мы
                определенно будем рекомендовать их своим друзьям и семье."
              </blockquote>
              <p className={cls.reviewsItemTextName}>
                - Алексей, частный клиент.
              </p>
            </div>
          </div>
          <div className={cls.reviewsItem}>
            <img
              className={cls.reviewsItemImage}
              src={review1}
              alt="review  "
            />
            <div className={cls.reviewsItemText}>
              <blockquote className="default-text">
                "Мы заказали Building Alliance для ремонта нашей квартиры, и они
                были очень профессиональны и добросовестны в своей работе. Они
                выполнили работу вовремя и оставили все в чистоте после себя. Мы
                определенно будем рекомендовать их своим друзьям и семье."
              </blockquote>
              <p className={cls.reviewsItemTextName}>
                - Алексей, частный клиент.
              </p>
            </div>
          </div>
          <div className={cls.reviewsItem}>
            <img
              className={cls.reviewsItemImage}
              src={review1}
              alt="review  "
            />
            <div className={cls.reviewsItemText}>
              <blockquote className="default-text">
                "Мы заказали Building Alliance для ремонта нашей квартиры, и они
                были очень профессиональны и добросовестны в своей работе. Они
                выполнили работу вовремя и оставили все в чистоте после себя. Мы
                определенно будем рекомендовать их своим друзьям и семье."
              </blockquote>
              <p className={cls.reviewsItemTextName}>
                - Алексей, частный клиент.
              </p>
            </div>
          </div>
          <div className={cls.reviewsItem}>
            <img
              className={cls.reviewsItemImage}
              src={review1}
              alt="review  "
            />
            <div className={cls.reviewsItemText}>
              <blockquote className="default-text">
                "Мы заказали Building Alliance для ремонта нашей квартиры, и они
                были очень профессиональны и добросовестны в своей работе. Они
                выполнили работу вовремя и оставили все в чистоте после себя. Мы
                определенно будем рекомендовать их своим друзьям и семье."
              </blockquote>
              <p className={cls.reviewsItemTextName}>
                - Алексей, частный клиент.
              </p>
            </div>
          </div>
          <div className={cls.reviewsItem}>
            <img
              className={cls.reviewsItemImage}
              src={review1}
              alt="review  "
            />
            <div className={cls.reviewsItemText}>
              <blockquote className="default-text">
                "Мы заказали Building Alliance для ремонта нашей квартиры, и они
                были очень профессиональны и добросовестны в своей работе. Они
                выполнили работу вовремя и оставили все в чистоте после себя. Мы
                определенно будем рекомендовать их своим друзьям и семье."
              </blockquote>
              <p className={cls.reviewsItemTextName}>
                - Алексей, частный клиент.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsContent;
