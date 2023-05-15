import { FC, useState } from "react";
import cls from "./ServiceItem.module.scss";
import { Link } from "react-router-dom";
import { rusToLatin } from "../../../utils/Transliterate";
import { ROUTES } from "../../../router/Routes";
import { IService } from "../../../models/Entity/IService";

import editImage from "../../../assets/img/edit.svg";
import deleteImage from "../../../assets/img/delete.svg";
import classNames from "classnames";
import ServiceModal from "../Modals/ServiceModal/ServiceModal";
import ServiceDeleteModal from "../Modals/ServiceDeleteModal/ServiceDeleteModal";

interface ServiceItemProps {
  service: IService;
  isAdmin?: boolean;
}

const ServiceItem: FC<ServiceItemProps> = ({ service, isAdmin }) => {
  const [isServiceChangeModalOpen, setIsServiceChangeModalOpen] =
    useState<boolean>(false);
  const [isServiceDeleteModalOpen, setIsServiceDeleteModalOpen] =
    useState<boolean>(false);
  return (
    <>
      {isServiceChangeModalOpen && (
        <ServiceModal
          closeMethod={setIsServiceChangeModalOpen}
          service={service}
        />
      )}
      {isServiceDeleteModalOpen && (
        <ServiceDeleteModal
          closeMethod={setIsServiceDeleteModalOpen}
          service={service}
        />
      )}
      <div className={classNames(cls.serviceItem, isAdmin && cls.withMargins)}>
        {isAdmin && (
          <div className={cls.serviceItemAdminPanel}>
            <img
              src={editImage}
              alt="изменить"
              onClick={() => setIsServiceChangeModalOpen(true)}
            />
            <img
              src={deleteImage}
              alt="удалить"
              onClick={() => setIsServiceDeleteModalOpen(true)}
            />
          </div>
        )}
        <Link
          to={`${ROUTES.SERVICES.en}/${rusToLatin(service.name)}/${service.id}`}
          state={service}
          className={classNames(
            cls.serviceItemContent,
            isAdmin && cls._notAnimated
          )}
        >
          <img
            className={cls.serviceItemImage}
            src={
              import.meta.env.VITE_API_URL + "/images/services/" + service.image
            }
          />
          <p className={cls.serviceItemName}>{service.name}</p>
        </Link>
      </div>
    </>
  );
};

export default ServiceItem;
