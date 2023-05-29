import { FC, useState } from "react";
import cls from "./VacancyList.module.scss";
import classNames from "classnames";
import { vacancyAPI } from "../../../api/VacancyAPI";
import sadSmile from "../../../assets/img/sad-smile.png";
import Loader from "../../UI/Loader/Loader";
import VacancyItem from "../VacanciesItem/VacancyItem";
import Pagination from "../../UI/Pagination/Pagination";

interface VacancyListProps {
  isAdmin?: boolean;
}

const VacancyList: FC<VacancyListProps> = ({ isAdmin }) => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);

  const { data: vacanciesList, isError } = vacancyAPI.useGetNewsQuery({
    page,
    limit,
  });

  if (isError) {
    return (
      <div className={classNames(cls.vacanciesList, "container")}>
        <h2 className="error-block">
          Ошибка получения вакансий
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  return (
    <div className={cls.vacanciesList}>
      <div className={classNames(cls.vacanciesListContent, "container")}>
        {!isAdmin && <h2 className={cls.vacanciesListTitle}>Наши вакансии</h2>}

        {vacanciesList?.rows ? (
          vacanciesList.rows.length > 0 ? (
            <>
              <div className={cls.newsListContent}>
                {vacanciesList.rows.map((vacancy) => (
                  <VacancyItem
                    key={vacancy.id}
                    isAdmin={isAdmin}
                    vacancy={vacancy}
                  />
                ))}
              </div>
              <Pagination
                totalCount={vacanciesList.count}
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
    </div>
  );
};

export default VacancyList;
