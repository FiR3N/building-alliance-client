import { FC, useState } from "react";
import cls from "./VacancyItem.module.scss";
import { IVacancy } from "../../../models/Entity/IVacancy";
import vacancyImage from "../../../assets/img/vakancy-plug-img.jpg";
import classNames from "classnames";
import MyButton from "../../UI/MyButton/MyButton";
import VacanacyDeleteModal from "../Modals/VacancyDeleteModal/VacancyDeleteModal";
import VacancyModal from "../Modals/VacancyModal/VacancyModal";
import VacancyContactModal from "../Modals/VacancyContactModal/VacancyContactModal";

import editImage from "../../../assets/img/edit.svg";
import deleteImage from "../../../assets/img/delete.svg";

interface VacancyItemProps {
  vacancy: IVacancy;
  isAdmin?: boolean;
}

const VacancyItem: FC<VacancyItemProps> = ({ vacancy, isAdmin }) => {
  const [isVacancyChangeModalOpen, setIsVacancyChangeModalOpen] =
    useState<boolean>(false);
  const [isVacancyDeleteModalOpen, setIsVacancyDeleteModalOpen] =
    useState<boolean>(false);
  const [isVacancyContactModalOpen, setIsVacancyContactModalOpen] =
    useState<boolean>(false);
  return (
    <>
      {isVacancyChangeModalOpen && (
        <VacancyModal
          closeMethod={setIsVacancyChangeModalOpen}
          vacancy={vacancy}
        />
      )}
      {isVacancyDeleteModalOpen && (
        <VacanacyDeleteModal
          closeMethod={setIsVacancyDeleteModalOpen}
          vacancy={vacancy}
        />
      )}
      {isVacancyContactModalOpen && (
        <VacancyContactModal
          closeMethod={setIsVacancyContactModalOpen}
          vacancyName={vacancy.name}
        />
      )}
      {isAdmin && (
        <div className={cls.vacancyItemAdminPanel}>
          <img
            src={editImage}
            alt="изменить"
            onClick={() => setIsVacancyChangeModalOpen(true)}
          />
          <img
            src={deleteImage}
            alt="удалить"
            onClick={() => setIsVacancyDeleteModalOpen(true)}
          />
        </div>
      )}
      <div className={cls.vacancyItem}>
        <img
          src={vacancyImage}
          alt="Вакансия"
          className={cls.vacancyItemImage}
        />
        <div className={cls.vacancyItemContent}>
          <p className={classNames(cls.vacancyItemName, "bold-text")}>
            {vacancy.name}
          </p>
          <p className="bold-text">
            Опыт работы:{" "}
            <span className="default-text">{vacancy.experience}</span>
          </p>
          <p className="bold-text">
            Занятость:{" "}
            <span className="default-text">{vacancy.occupation}</span>
          </p>
          {vacancy.wage && (
            <p className="bold-text">
              Зарплата:{" "}
              <span className="default-text">от {vacancy.wage} BYN</span>
            </p>
          )}
          <p className="bold-text">
            Описание:{" "}
            <span className="default-text">{vacancy.description}</span>
          </p>
          <MyButton onClick={() => setIsVacancyContactModalOpen(true)}>
            Подать заявку
          </MyButton>
        </div>
      </div>
    </>
  );
};

export default VacancyItem;
