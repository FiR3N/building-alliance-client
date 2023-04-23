import { FC } from "react";
import cls from "./ServiceList.module.scss";
import classNames from "classnames";
import useFetch from "../../../hooks/useFetch";
import { IService } from "../../../models/IService";
import sadSmile from "../../../assets/img/sad-smile.svg";
import Loader from "../../UI/Loader/Loader";
import ServiceItem from "../ServiceItem/ServiceItem";

const ServiceList: FC = () => {
  const { data: services, error } = useFetch<IService[]>(
    `${import.meta.env.VITE_API_URL}/services`
  );

  return (
    <div className={cls.services}>
      <div className={classNames(cls.servicesContent, "container")}>
        {!error ? (
          services ? (
            services?.length > 0 &&
            services.map((item) => <ServiceItem service={item} key={item.id} />)
          ) : (
            <Loader />
          )
        ) : (
          <h2 className={cls.servicesErrorText}>
            Услуг не найдено ({error.message})
            <img className="smile-image" src={sadSmile} alt="sad-smile" />
          </h2>
        )}
      </div>
    </div>
  );
};

export default ServiceList;
