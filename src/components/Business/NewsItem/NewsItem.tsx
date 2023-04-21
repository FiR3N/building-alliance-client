import { FC } from "react";
import cls from "./NewsItem.module.scss";
import { INews } from "../../../models/INews";
import classNames from "classnames";
import { Link } from "react-router-dom";
import StringToUrl from "../../../utils/StringToUrl";
import { rusToLatin } from "../../../utils/Transliterate";
import { MdDateRange } from "react-icons/md";

interface NewsItemProps {
  news: INews;
}

const NewsItem: FC<NewsItemProps> = ({ news }) => {
  return (
    <Link
      state={news}
      to={`${StringToUrl(rusToLatin(news.name))}/${news.id}`}
      className={cls.newsItem}
    >
      <img
        src={import.meta.env.VITE_API_URL + "/images/news/" + news.img}
        alt={news.name}
        className={cls.newsItemImage}
      />
      <p className={classNames(cls.newsItemDate, "default-text")}>
        <MdDateRange /> {news.date}
      </p>
      <p className={cls.newsItemTitle}>{news.name}</p>
      <p className={classNames(cls.newsItemDescription, "default-text")}>
        {news.description}
      </p>
    </Link>
  );
};

export default NewsItem;
