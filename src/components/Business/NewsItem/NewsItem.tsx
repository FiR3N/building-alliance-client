import { FC } from "react";
import cls from "./NewsItem.module.scss";
import { INews } from "../../../models/INews";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface NewsItemProps {
  news: INews;
}

const NewsItem: FC<NewsItemProps> = ({ news }) => {
  return (
    <Link to={""} className={cls.newsItem}>
      <img
        src={import.meta.env.VITE_API_URL + "/images/news/" + news.img}
        alt={news.name}
        className={cls.newsItemImage}
      />
      <p className={cls.newsItemTitle}>{news.name}</p>
      <p className={classNames(cls.newsItemDescription, "default-text")}>
        {news.description}
      </p>
    </Link>
  );
};

export default NewsItem;
