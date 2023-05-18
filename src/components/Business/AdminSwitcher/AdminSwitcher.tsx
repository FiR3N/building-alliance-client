import { FC, useState, Suspense, lazy } from "react";
import cls from "./AdminSwitcher.module.scss";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import classNames from "classnames";

import certificate from "../../../assets/img/certificate.png";
import news from "../../../assets/img/news.svg";
import services from "../../../assets/img/services.svg";
import works from "../../../assets/img/building.png";
import users from "../../../assets/img/users.png";
import vacancy from "../../../assets/img/vacancy.png";
import { Link, Outlet } from "react-router-dom";
import CustomAdminLink from "../../UI/CustomAdminLink/CustomAdminLink";

const AdminSwitcher: FC = () => {
  const { user } = useTypeSelector((state) => state.userReducer);

  const [isNewsOpen, setIsNewsOpen] = useState<boolean>(
    user.roleId === 1 || user.roleId === 2 ? true : false
  );
  const [isServicesOpen, setIsServiceOpen] = useState<boolean>(
    user.roleId === 3 || user.roleId === 2 ? true : false
  );
  const [isCertificatesOpen, setIsCertificatesOpen] = useState<boolean>(false);
  const [isUsersOpen, setIsUsersOpen] = useState<boolean>(false);
  const [isWorksOpen, setIsWorksOpen] = useState<boolean>(false);
  const [isVacanciesOpen, setIsVacanciesOpen] = useState<boolean>(false);

  return (
    <>
      <div className={classNames(cls.adminSwitcher, "container")}>
        <div className={cls.adminSwitcherContent}>
          {(user.roleId === 2 || user.roleId === 1) && (
            <CustomAdminLink to="news">
              <p className="bold-title-text">Новости</p>
              <img src={news} alt="news" />
            </CustomAdminLink>
          )}
          {(user.roleId === 3 || user.roleId === 1) && (
            <CustomAdminLink to="services">
              <p className="bold-title-text">Услуги</p>
              <img src={services} alt="services" />
            </CustomAdminLink>
          )}

          {(user.roleId === 2 || user.roleId === 1) && (
            <CustomAdminLink to="works">
              <p className="bold-title-text">Работы</p>
              <img src={works} alt="works" />
            </CustomAdminLink>
          )}

          {(user.roleId === 2 || user.roleId === 1) && (
            <CustomAdminLink to="certificates">
              <p className="bold-title-text">Сертификаты</p>
              <img src={certificate} alt="certificate" />
            </CustomAdminLink>
          )}
          {(user.roleId === 3 || user.roleId === 1) && (
            <CustomAdminLink to="vacancies">
              <p className="bold-title-text">Вакансии</p>
              <img src={vacancy} alt="vacancy" />
            </CustomAdminLink>
          )}

          {user.roleId === 1 && (
            <CustomAdminLink
              to="users"
              // className={classNames(
              //   cls.adminSwitcherItem,
              //   isUsersOpen && cls._active
              // )}
            >
              <p className="bold-title-text">Пользователи</p>
              <img src={users} alt="users" />
            </CustomAdminLink>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AdminSwitcher;
