import { FC } from "react";
import cls from "./CertificateList.module.scss";
import classNames from "classnames";
import useFetch from "../../../hooks/useFetch";
import { ICertificate } from "../../../models/Entity/ICertificate";
import sadSmile from "../../../assets/img/sad-smile.svg";
import Loader from "../../UI/Loader/Loader";
import CertificateItem from "../CertificateItem/CertificateItem";
import { certificateAPI } from "../../../api/CertificateAPI";

interface CertificateListrops {
  isAdmin?: boolean;
}

const CertificateList: FC<CertificateListrops> = ({ isAdmin }) => {
  const { data: certificatesList, error } =
    certificateAPI.useGetCertificatesQuery({});

  if (error) {
    return (
      <div className={classNames(cls.certificateList, "container")}>
        <h2 className={cls.certificateListError}>
          Ошибка загрузки сертификатов
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  return (
    <div className={classNames(cls.certificateList, "container")}>
      <div className={cls.certificateListContent}>
        {certificatesList ? (
          certificatesList?.length > 0 ? (
            certificatesList.map((item) => (
              <CertificateItem
                certificate={item}
                isAdmin={isAdmin}
                key={item.id}
              />
            ))
          ) : (
            <h2 className={cls.certificateListError}>
              Сертификатов не найдено
              <img className="smile-image" src={sadSmile} alt="sad-smile" />
            </h2>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default CertificateList;
