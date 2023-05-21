import { FC, useState } from "react";
import cls from "./ServiceList.module.scss";
import classNames from "classnames";
import sadSmile from "../../../assets/img/sad-smile.svg";
import Loader from "../../UI/Loader/Loader";
import ServiceItem from "../ServiceItem/ServiceItem";
import { servicesAPI } from "../../../api/ServicesAPI";

interface ServiceListProps {
  limitProp?: number;
  isFull?: boolean;
  isAdmin?: boolean;
}

const ServiceList: FC<ServiceListProps> = ({ limitProp, isFull, isAdmin }) => {
  const [page] = useState<number>(1);
  const [limit] = useState<number>(limitProp || 9);

  let { error, data: serviceList } = servicesAPI.useGetServicesQuery({
    page,
    limit,
  });

  if (error) {
    return (
      <div className={classNames(cls.servicesList, "container")}>
        <h2 className={cls.servicesListError}>
          Услуг не найдено
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  return (
    <div className={classNames(cls.servicesList, "container")}>
      {isFull && (
        <h2 className={cls.servicesListTitle}>
          Качественные строительные услуги
        </h2>
      )}
      <div className={cls.servicesListContent}>
        {serviceList?.rows ? (
          serviceList?.rows.length > 0 &&
          serviceList.rows.map((item) => (
            <ServiceItem service={item} isAdmin={isAdmin} key={item.id} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ServiceList;
