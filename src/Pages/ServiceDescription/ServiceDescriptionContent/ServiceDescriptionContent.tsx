import { FC } from "react";
import cls from "../ServiceDescription.module.scss";
import { IService } from "../../../models/IService";
import classNames from "classnames";
import sadSmile from "../../../assets/img/sad-smile.svg";

interface ServiceDescriptionContentProps {
  service: IService;
}

const ServiceDescriptionContent: FC<ServiceDescriptionContentProps> = ({
  service,
}) => {
  console.log(service);
  return (
    <div className={cls.serviceDescription}>
      <div className={classNames(cls.serviceDescriptionContent, "container")}>
        {service ? (
          <>
            <h2 className={cls.serviceDescriptionTitle}>{service.name}</h2>
            <div className={cls.serviceDescriptionMain}>
              <div className={cls.serviceDescriptionText}>
                {service?.infos?.map((item) => (
                  <p key={item.id} className="default-text">
                    {item.description}
                  </p>
                ))}
              </div>
              <img
                className={cls.serviceDescriptionImage}
                src={
                  import.meta.env.VITE_API_URL +
                  `/images/services/` +
                  service.image
                }
                alt={service.name}
              />
            </div>
          </>
        ) : (
          <h2 className={cls.serviceDescriptionError}>
            Упс. Что пошло не так
            <img className="smile-image" src={sadSmile} alt="sad-smile" />
          </h2>
        )}
      </div>
    </div>
  );
};

export default ServiceDescriptionContent;
