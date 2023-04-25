import { FC } from "react";
import cls from "./CertificateList.module.scss";
import classNames from "classnames";
import useFetch from "../../../hooks/useFetch";
import { ICertificate } from "../../../models/ICertificate";
import sadSmile from "../../../assets/img/sad-smile.svg";
import Loader from "../../UI/Loader/Loader";
import CertificateItem from "../CertificateItem/CertificateItem";

const CertificateList: FC = () => {
  const { data: certificates, error } = useFetch<ICertificate[]>(
    `${import.meta.env.VITE_API_URL}/certificates`
  );

  if (error) {
    return (
      <div className={classNames(cls.certificateList, "container")}>
        <h2 className={cls.certificateListError}>
          Сертификатов не найдено
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  return (
    <div className={classNames(cls.certificateList, "container")}>
      <div className={cls.certificateListContent}>
        {certificates ? (
          certificates?.length > 0 &&
          certificates.map((item) => (
            <CertificateItem certificate={item} key={item.id} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default CertificateList;
