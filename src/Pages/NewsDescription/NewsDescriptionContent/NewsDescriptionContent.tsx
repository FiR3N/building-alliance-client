import { FC } from "react";
import cls from "../NewsDescription.module.scss";
import classNames from "classnames";
import sadSmile from "../../../assets/img/sad-smile.svg";
import { INews } from "../../../models/Entity/INews";
import { MdDateRange } from "react-icons/md";

interface NewsDescriptionContentProps {
  news: INews | null;
}

const NewsDescriptionContent: FC<NewsDescriptionContentProps> = ({ news }) => {
  return (
    <div className={cls.newsDescription}>
      <div className={classNames(cls.newsDescriptionContent, "container")}>
        {news ? (
          <>
            <h2 className={cls.newsDescriptionTitle}>{news.name}</h2>
            <p className={classNames(cls.newsDescriptionDate, "default-text")}>
              <MdDateRange /> {news.date}
            </p>
            <img
              className={cls.newsDescriptionImage}
              src={import.meta.env.VITE_API_URL + `/images/news/` + news.img}
            />
            <div className={cls.newsDescriptionText}>
              {news.infos.map((item) => (
                <p key={item.id} className="default-text">
                  {item.description}
                </p>
              ))}
            </div>
          </>
        ) : (
          <h2 className={cls.newsDescriptionError}>
            Упс. Что пошло не так
            <img className="smile-image" src={sadSmile} alt="sad-smile" />
          </h2>
        )}
      </div>
    </div>
  );
};

export default NewsDescriptionContent;
