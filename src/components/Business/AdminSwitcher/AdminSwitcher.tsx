import { FC, useState } from "react";
import cls from "./AdminSwitcher.module.scss";
import { useTypeSelector } from "../../../hooks/useTypeSelector";

import certificate from "../../../assets/img/certificate.png";
import news from "../../../assets/img/news.svg";
import services from "../../../assets/img/services.svg";
import works from "../../../assets/img/building.png";
import users from "../../../assets/img/users.png";
import classNames from "classnames";
import NewsList from "../NewsList/NewsList";
import ServiceList from "../ServiceList/ServiceList";
import CertificateList from "../CertificateList/CertificateList";
import OurWorksList from "../OurWorksList/OurWorksList";
import AdminNewsPage from "../AdminNewsPage/AdminNewsPage";

const AdminSwitcher: FC = () => {
  const { user } = useTypeSelector((state) => state.userReducer);

  const [isNewsOpen, setIsNewsOpen] = useState<boolean>(true);
  const [isServicesOpen, setIsServiceOpen] = useState<boolean>(false);
  const [isCertificatesOpen, setIsCertificatesOpen] = useState<boolean>(false);
  const [isUsersOpen, setIsUsersOpen] = useState<boolean>(false);
  const [isWorksOpen, setIsWorksOpen] = useState<boolean>(false);

  const handleNewsClick = () => {
    setIsNewsOpen(true);
    setIsServiceOpen(false);
    setIsCertificatesOpen(false);
    setIsUsersOpen(false);
    setIsWorksOpen(false);
  };

  const handleServiceClick = () => {
    setIsNewsOpen(false);
    setIsServiceOpen(true);
    setIsCertificatesOpen(false);
    setIsUsersOpen(false);
    setIsWorksOpen(false);
  };

  const handleWorksClick = () => {
    setIsNewsOpen(false);
    setIsServiceOpen(false);
    setIsCertificatesOpen(false);
    setIsUsersOpen(false);
    setIsWorksOpen(true);
  };

  const handleCertificatesClick = () => {
    setIsNewsOpen(false);
    setIsServiceOpen(false);
    setIsCertificatesOpen(true);
    setIsUsersOpen(false);
    setIsWorksOpen(false);
  };

  const handleUsersClick = () => {
    setIsNewsOpen(false);
    setIsServiceOpen(false);
    setIsCertificatesOpen(false);
    setIsUsersOpen(true);
    setIsWorksOpen(false);
  };

  return (
    <>
      <div className={cls.adminSwitcher}>
        <div
          className={classNames(
            cls.adminSwitcherItem,
            isNewsOpen && cls._active
          )}
          onClick={handleNewsClick}
        >
          <p className="bold-title-text">Новости</p>
          <img src={news} alt="news" />
        </div>
        <div
          className={classNames(
            cls.adminSwitcherItem,
            isServicesOpen && cls._active
          )}
          onClick={handleServiceClick}
        >
          <p className="bold-title-text">Услуги</p>
          <img src={services} alt="services" />
        </div>
        <div
          className={classNames(
            cls.adminSwitcherItem,
            isWorksOpen && cls._active
          )}
          onClick={handleWorksClick}
        >
          <p className="bold-title-text">Работы</p>
          <img src={works} alt="works" />
        </div>
        <div
          className={classNames(
            cls.adminSwitcherItem,
            isCertificatesOpen && cls._active
          )}
          onClick={handleCertificatesClick}
        >
          <p className="bold-title-text">Сертификаты</p>
          <img src={certificate} alt="certificate" />
        </div>
        {user.roleId === 1 && (
          <div
            className={classNames(
              cls.adminSwitcherItem,
              isUsersOpen && cls._active
            )}
            onClick={handleUsersClick}
          >
            <p className="bold-title-text">Пользователи</p>
            <img src={users} alt="users" />
          </div>
        )}
      </div>
      {isNewsOpen && <AdminNewsPage />}
      {isServicesOpen && <ServiceList />}
      {isCertificatesOpen && <CertificateList />}

      {isWorksOpen && <OurWorksList isFull />}
      {user.roleId === 1 && isUsersOpen && <p>Пользователи</p>}
    </>
  );
};

export default AdminSwitcher;
