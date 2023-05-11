import { FC, useState, useEffect } from "react";
import cls from "./OurWorksList.module.scss";
import classNames from "classnames";
import { worksAPI } from "../../../api/WorksService";
import Loader from "../../UI/Loader/Loader";
import sadSmile from "../../../assets/img/sad-smile.svg";
import Pagination from "../../UI/Pagination/Pagination";
import OurWorksItem from "../OurWorksItem/OurWorksItem";

interface OurWorksListProps {
  limitProp?: number;
  isFull?: boolean;
}

const OurWorksList: FC<OurWorksListProps> = ({ limitProp, isFull }) => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(limitProp || 12);

  let { error, data: worksList } = worksAPI.useGetWorksQuery({
    page,
    limit,
  });

  if (error) {
    return (
      <div className={classNames(cls.ourWorksList, "container")}>
        <h2 className={cls.ourWorksListError}>
          Ошибка получения данных
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ourWorksList, "container")}>
      {isFull && <h2 className={cls.ourWorksListTitle}>Выполненные работы</h2>}
      {worksList?.rows ? (
        worksList.rows.length > 0 ? (
          <>
            <div className={cls.ourWorksListContent}>
              {worksList.rows.map((work) => (
                <OurWorksItem key={work.id} work={work} />
              ))}
            </div>
            {isFull && (
              <Pagination
                totalCount={worksList.count}
                page={page}
                limit={limit}
                changePage={setPage}
              />
            )}
          </>
        ) : (
          <h2 className={cls.ourWorksError}>
            Работ не найдено
            <img className="smile-image" src={sadSmile} alt="sad-smile" />
          </h2>
        )
      ) : (
        <Loader withMargins={true} />
      )}
    </div>
  );
};

export default OurWorksList;
