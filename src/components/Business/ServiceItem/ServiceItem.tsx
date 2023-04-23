import { FC } from "react";
import cls from "./ServiceItem.module.scss";
import { IService } from "../../../models/IService";
import { Link } from "react-router-dom";
import StringToUrl from "../../../utils/StringToUrl";
import { rusToLatin } from "../../../utils/Transliterate";
import { ROUTES } from "../../../router/Routes";

interface ServiceItemProps {
  service: IService;
}

const ServiceItem: FC<ServiceItemProps> = ({ service }) => {
  return (
    <Link
      to={`${ROUTES.SERVICES.en}/${StringToUrl(rusToLatin(service.name))}/${
        service.id
      }`}
      state={service}
      className={cls.serviceItem}
    >
      <img
        className={cls.serviceItemImage}
        src={import.meta.env.VITE_API_URL + "/images/services/" + service.image}
      />
      <p className={cls.serviceItemName}>{service.name}</p>
    </Link>
  );
};

export default ServiceItem;
