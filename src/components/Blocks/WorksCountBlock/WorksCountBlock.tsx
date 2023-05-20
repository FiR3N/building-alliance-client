import { FC } from "react";
import cls from "./WorksCountBlock.module.scss";
import classNames from "classnames";

const WorksCountBlock: FC = () => {
  return (
    <div className={cls.worksCountBlock}>
      <div className={classNames(cls.worksCountBlockContent, "container")}>
        <div className={cls.worksCountBlockItem}>
          <span />
          <p className="date">50</p>
          <h5>
            Летний <br /> опыт
          </h5>
        </div>
        <div className={cls.worksCountBlockItem}>
          <span />
          <p className="date">122</p>
          <h5>Специалистов</h5>
        </div>
        <div className={cls.worksCountBlockItem}>
          <span />
          <p className="date">500+</p>
          <h5>
            Успешых <br /> проектов
          </h5>
        </div>

        <div className={cls.worksCountBlockItem}>
          <span />
          <p className="date">100</p>
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
