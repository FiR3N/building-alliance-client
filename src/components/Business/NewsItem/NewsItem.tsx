import { FC, useState } from "react";
import cls from "./NewsItem.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { rusToLatin } from "../../../utils/Transliterate";
import { MdDateRange } from "react-icons/md";
import { INews } from "../../../models/Entity/INews";

import editImage from "../../../assets/img/edit.svg";
import deleteImage from "../../../assets/img/delete.svg";
import NewsModal from "../Modals/NewsModal/NewsModal";
import NewsDeleteModal from "../Modals/NewsDeleteModal/NewsDeleteModal";
import date from "../../../assets/img/date.png";

interface NewsItemProps {
  news: INews;
  isAdmin?: boolean;
}

const NewsItem: FC<NewsItemProps> = ({ news, isAdmin }) => {
  const [isNewsChangeModalOpen, setIsNewsChangeModalOpen] =
    useState<boolean>(false);
  const [isNewsDeleteModalOpen, setIsNewsDeleteModalOpen] =
    useState<boolean>(false);

  return (
    <>
      {isNewsChangeModalOpen && (
        <NewsModal closeMethod={setIsNewsChangeModalOpen} news={news} />
      )}
      {isNewsDeleteModalOpen && (
        <NewsDeleteModal closeMethod={setIsNewsDeleteModalOpen} news={news} />
      )}
      <div className={cls.newsItem}>
        {isAdmin && (
          <div className={cls.newsItemAdminPanel}>
            <img
              src={editImage}
              alt="изменить"
              onClick={() => setIsNewsChangeModalOpen(true)}
            />
            <img
              src={deleteImage}
              alt="удалить"
              onClick={() => setIsNewsDeleteModalOpen(true)}
            />
          </div>
        )}

        <Link
          state={news}
          to={`/news/${rusToLatin(news.name)}/${news.id}`}
          className={cls.newsItemContent}
        >
          <div className={cls.newsItemImage}>
            <img
              src={import.meta.env.VITE_API_URL + "/images/news/" + news.img}
              alt={news.name}
            />
          </div>

          <p className={classNames(cls.newsItemDate, "default-text")}>
            <img src={date} alt="Дата" /> {news.date}
          </p>
          <p className={cls.newsItemTitle}>{news.name}</p>
          <p className={classNames(cls.newsItemDescription, "default-text")}>
            {news.description}
          </p>
        </Link>
      </div>
    </>
  );
};

export default NewsItem;
