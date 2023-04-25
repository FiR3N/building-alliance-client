import { FC } from "react";
import cls from "./ServiceList.module.scss";
import classNames from "classnames";
import useFetch from "../../../hooks/useFetch";
import { IService } from "../../../models/IService";
import sadSmile from "../../../assets/img/sad-smile.svg";
import Loader from "../../UI/Loader/Loader";
import ServiceItem from "../ServiceItem/ServiceItem";
import RedirectToContactBlock from "../../UI/RedirectToContactBlock/RedirectToContactBlock";

const ServiceList: FC = () => {
  const { data: services, error } = useFetch<IService[]>(
    `${import.meta.env.VITE_API_URL}/services`
  );

  if (error) {
    return (
      <div className={classNames(cls.servicesList, "container")}>
        <h2 className={cls.servicesListError}>
          Услуг не найдено ({error.message})
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  return (
    <div className={classNames(cls.servicesList, "container")}>
      <h2 className={cls.servicesListTitle}>
        Качественные строительные услуги
      </h2>
      <div className={cls.servicesListContent}>
        {services ? (
          services?.length > 0 &&
          services.map((item) => <ServiceItem service={item} key={item.id} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ServiceList;
