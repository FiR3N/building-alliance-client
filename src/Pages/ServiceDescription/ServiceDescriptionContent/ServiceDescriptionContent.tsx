import { FC } from "react";
import cls from "../ServiceDescription.module.scss";
import classNames from "classnames";
import sadSmile from "../../../assets/img/sad-smile.svg";
import RedirectToContactBlock from "../../../components/Blocks/RedirectToContactBlock/RedirectToContactBlock";
import { IService } from "../../../models/Entity/IService";
import useFetch from "../../../hooks/useFetch";
import { IMixture } from "../../../models/Entity/IMixture";
import MixturesTypesList from "../../../components/Business/MixturesTypesList/MixturesTypesList";

interface ServiceDescriptionContentProps {
  service: IService;
}

const ServiceDescriptionContent: FC<ServiceDescriptionContentProps> = ({
  service,
}) => {
  const { data } =
    service.id === 2
      ? useFetch<IMixture[]>(import.meta.env.VITE_API_URL + "/mixtures")
      : { data: null };

  return (
    <>
      <div className={cls.serviceDescription}>
        <div className={classNames(cls.serviceDescriptionContent, "container")}>
          {service ? (
            <>
              <h2 className={cls.serviceDescriptionTitle}>{service.name}</h2>
              <div className={cls.serviceDescriptionMain}>
                <div className={cls.serviceDescriptionText}>
                  {service.infos?.map((item) => (
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
      {service.id === 2 && (
        // <div className={cls.serviceDescriptionTable}>
        //   <div className={cls.serviceDescriptionTableHeaders}>
        //     <h5>Название</h5>
        //     <h5>Единицы измерения</h5>
        //     <h5>Цена без НДС</h5>
        //     <h5>Цена с ндс</h5>
        //   </div>
        //   {data?.map((item) => {
        //     return (
        //       <>
        //         <div className={cls.serviceDescriptionContent}>
        //           <p>{item.name}</p>
        //           <p>{item.unitOfMeasurement}</p>
        //           <p>{item.priceWithVAT}</p>
        //           <p>{item.priceWithoutVAT}</p>
        //         </div>
        //       </>
        //     );
        //   })}
        // </div>
        <MixturesTypesList />
      )}
      <RedirectToContactBlock />
    </>
  );
};

export default ServiceDescriptionContent;
