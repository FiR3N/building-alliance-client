import { FC, useState, useEffect } from "react";
import cls from "./NewsList.module.scss";
import { newsAPI } from "../../../api/NewsService";
import NewsItem from "../NewsItem/NewsItem";
import Loader from "../../UI/Loader/Loader";
import classNames from "classnames";
import useDebounce from "../../../hooks/useDebounce";
import MyInput from "../../UI/MyInput/MyInput";
import Pagination from "../../UI/Pagination/Pagination";
import sadSmile from "../../../assets/img/sad-smile.svg";

interface NewsListProps {}

const NewsList: FC<NewsListProps> = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);
  const [name, setName] = useState<string>("");

  const debounceName = useDebounce(name, 500);

  let { isError, data: newsList } = newsAPI.useGetNewsQuery({
    page,
    limit,
    name: debounceName,
  });

  useEffect(() => {
    setPage(1);
  }, [debounceName]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  if (isError) {
    <h2 className={cls.employeeListError}>{"Неизвестная ошибка! :< "}</h2>;
  }

  return (
    <div className={classNames(cls.newsList, "container")}>
      <h2 className={cls.newsListTitle}>
        Будь в курсе наших последних событий!
      </h2>
      <MyInput
        placeholder="поиск..."
        value={name}
        onChange={handleSearchInput}
      />
      {newsList?.rows ? (
        newsList.rows.length > 0 ? (
          <>
            <div className={cls.newsListContent}>
              {newsList.rows.map((news) => (
                <NewsItem key={news.id} news={news} />
              ))}
            </div>
            <Pagination
              totalCount={newsList.count}
              page={page}
              limit={limit}
              changePage={setPage}
            />
          </>
        ) : (
          <h2 className={cls.newsListError}>
            Новостей не найдено
            <img className="smile-image" src={sadSmile} alt="sad-smile" />
          </h2>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default NewsList;
