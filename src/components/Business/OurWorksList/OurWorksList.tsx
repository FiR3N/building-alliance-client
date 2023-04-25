import { FC, useState } from "react";
import cls from "./OurWorksList.module.scss";
import classNames from "classnames";
import { worksAPI } from "../../../api/WorksService";
import Loader from "../../UI/Loader/Loader";
import sadSmile from "../../../assets/img/sad-smile.svg";
import Pagination from "../../UI/Pagination/Pagination";
import OurWorksItem from "../OurWorksItem/OurWorksItem";

interface OurWorksListProps {}

const OurWorksList: FC<OurWorksListProps> = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(12);

  let { error, data: worksList } = worksAPI.useGetWorksQuery({
    page,
    limit,
  });

  if (error) {
    return (
      <h2 className={cls.ourWorksListError}>
        Ошибка получения данных{" "}
        <img className="smile-image" src={sadSmile} alt="sad-smile" />
      </h2>
    );
  }

  return (
    <div className={cls.ourWorksList}>
      <div className={classNames(cls.ourWorksListContent, "container")}>
        {worksList?.rows ? (
          worksList.rows.length > 0 ? (
            <>
              {worksList.rows.map((work) => (
                <OurWorksItem key={work.id} work={work} />
              ))}
              <Pagination
                totalCount={worksList.count}
                page={page}
                limit={limit}
                changePage={setPage}
              />
            </>
          ) : (
            <h2 className={cls.ourWorksError}>
              Новостей не найдено
              <img className="smile-image" src={sadSmile} alt="sad-smile" />
            </h2>
          )
        ) : (
          <Loader withMargins={true} />
        )}
      </div>
    </div>
  );
};

export default OurWorksList;
