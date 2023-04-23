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

  return (
    <div className={cls.certificate}>
      <div className={classNames(cls.certificateContent, "container")}>
        {!error ? (
          certificates ? (
            certificates?.length > 0 &&
            certificates.map((item) => (
              <CertificateItem certificate={item} key={item.id} />
            ))
          ) : (
            <Loader />
          )
        ) : (
          <h2 className={cls.certificateErrorText}>
            Новостей не найдено
            <img className="smile-image" src={sadSmile} alt="sad-smile" />
          </h2>
        )}
      </div>
    </div>
  );
};

export default CertificateList;
