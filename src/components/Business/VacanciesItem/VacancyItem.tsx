import { FC } from "react";
import cls from "./VacancyItem.module.scss";
import { IVacancy } from "../../../models/Entity/IVacancy";
import vacancyImage from "../../../assets/img/vakancy-plug-img.jpg";
import classNames from "classnames";
import MyButton from "../../UI/MyButton/MyButton";
import { Link } from "react-router-dom";

interface VacancyItemProps {
  vacancy: IVacancy;
}

const VacancyItem: FC<VacancyItemProps> = ({ vacancy }) => {
  return (
    <div className={cls.vacancyItem}>
      <img src={vacancyImage} alt="Вакансия" className={cls.vacancyItemImage} />
      <div className={cls.vacancyItemContent}>
        <p className={classNames(cls.vacancyItemName, "bold-text")}>
          {vacancy.name}
        </p>
        <p className="bold-text">
          Опыт работы:{" "}
          <span className="default-text">{vacancy.experience}</span>
        </p>
        <p className="bold-text">
          Занятость: <span className="default-text">{vacancy.occupation}</span>
        </p>
        {vacancy.wage && (
          <p className="bold-text">
            Зарплата:{" "}
            <span className="default-text">от {vacancy.wage} BYN</span>
          </p>
        )}
        <p className="bold-text">
          Описание: <span className="default-text">{vacancy.description}</span>
        </p>
        <Link to="/contact">
          <MyButton>Контакты</MyButton>
        </Link>
      </div>
    </div>
  );
};

export default VacancyItem;
