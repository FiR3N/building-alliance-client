import { FC, useState, Suspense, lazy } from "react";
import cls from "./AdminSwitcher.module.scss";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import CustomAdminLink from "../../UI/CustomAdminLink/CustomAdminLink";

import certificate from "../../../assets/img/certificate.png";
import news from "../../../assets/img/news.svg";
import services from "../../../assets/img/services.svg";
import works from "../../../assets/img/building.png";
import users from "../../../assets/img/users.png";
import vacancy from "../../../assets/img/vacancy.png";
import vehicle from "../../../assets/img/crane.png";
import mixtures from "../../../assets/img/reinforced-concrete.png";
import reviews from "../../../assets/img/reviews.png";

const AdminSwitcher: FC = () => {
  const { user } = useTypeSelector((state) => state.userReducer);

  return (
    <>
      <div className={classNames(cls.adminSwitcher, "container")}>
        <div className={cls.adminSwitcherContent}>
          {(user.roleId === 2 || user.roleId === 1) && (
            <CustomAdminLink to="news">
              <p className="bold-title-text">Новости</p>
              <img src={news} alt="новости" />
            </CustomAdminLink>
          )}
          {(user.roleId === 3 || user.roleId === 1) && (
            <CustomAdminLink to="services">
              <p className="bold-title-text">Услуги</p>
              <img src={services} alt="услуги" />
            </CustomAdminLink>
          )}
          {(user.roleId === 3 || user.roleId === 1) && (
            <CustomAdminLink to="vehicles">
              <p className="bold-title-text">Техника</p>
              <img src={vehicle} alt="техника" />
            </CustomAdminLink>
          )}
          {(user.roleId === 3 || user.roleId === 1) && (
            <CustomAdminLink to="mixtures">
              <p className="bold-title-text">Растворы</p>
              <img src={mixtures} alt="растворы" />
            </CustomAdminLink>
          )}
          {(user.roleId === 2 || user.roleId === 1) && (
            <CustomAdminLink to="works">
              <p className="bold-title-text">Работы</p>
              <img src={works} alt="работы" />
            </CustomAdminLink>
          )}

          {(user.roleId === 2 || user.roleId === 1) && (
            <CustomAdminLink to="certificates">
              <p className="bold-title-text">Сертификаты</p>
              <img src={certificate} alt="сертификаты" />
            </CustomAdminLink>
          )}
          {(user.roleId === 2 || user.roleId === 1) && (
            <CustomAdminLink to="reviews">
              <p className="bold-title-text">Отзывы</p>
              <img src={reviews} alt="отзывы" />
            </CustomAdminLink>
          )}
          {(user.roleId === 3 || user.roleId === 1) && (
            <CustomAdminLink to="vacancies">
              <p className="bold-title-text">Вакансии</p>
              <img src={vacancy} alt="вакансии" />
            </CustomAdminLink>
          )}

          {user.roleId === 1 && (
            <CustomAdminLink to="users">
              <p className="bold-title-text">Пользователи</p>
              <img src={users} alt="пользователя" />
            </CustomAdminLink>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AdminSwitcher;
