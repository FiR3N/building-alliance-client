import { FC, useState } from "react";
import cls from "./NewsList.module.scss";
import { newsAPI } from "../../../api/NewsService";
import NewsItem from "../NewsItem/NewsItem";
import Loader from "../../UI/Loader/Loader";
import classNames from "classnames";
interface NewsListProps {}

const NewsList: FC<NewsListProps> = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);

  let { isError, data: newsList } = newsAPI.useGetNewsQuery({ page, limit });

  if (isError) {
    <h2 className={cls.employeeListError}>{"Неизвестная ошибка! :< "}</h2>;
  }

  return (
    <div className={classNames(cls.newsList, "container")}>
      {newsList?.rows ? (
        newsList.rows.length > 0 ? (
          <>
            <h2 className={cls.newsListTitle}>
              Будь в курсе наших последних событий!
            </h2>
            <div className={cls.newsListContent}>
              {newsList.rows.map((news) => (
                <NewsItem key={news.id} news={news} />
              ))}
            </div>
          </>
        ) : (
          <h2 className={cls.newsListError}>{"Новостей не найдено :< "}</h2>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default NewsList;
