import { FC } from "react";
import cls from "./WorksCountBlock.module.scss";
import classNames from "classnames";

const WorksCountBlock: FC = () => {
  return (
    <div className={cls.worksCountBlock}>
      <div className={classNames(cls.worksCountBlockContent, "container")}>
        <div className={cls.worksCountBlockItem}>
          <p className="date">
            <span />
            50
          </p>
          <h5>Летний опыт</h5>
        </div>
        <div className={cls.worksCountBlockItem}>
          <p className="date">
            <span />
            122
          </p>
          <h5>Специалиста</h5>
        </div>
        <div className={cls.worksCountBlockItem}>
          <p className="date">
            <span />
            500+
          </p>
          <h5>
            Успешых <br /> проектов
          </h5>
        </div>

        <div className={cls.worksCountBlockItem}>
          <p className="date">
            <span />
            100
          </p>
          <h5>
            Довольных <br />
            заказчиков
          </h5>
        </div>
      </div>
    </div>
  );
};

export default WorksCountBlock;
