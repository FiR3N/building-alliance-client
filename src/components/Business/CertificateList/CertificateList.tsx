import { FC } from "react";
import cls from "./CertificateList.module.scss";
import classNames from "classnames";
import useFetch from "../../../hooks/useFetch";
import { ICertificate } from "../../../models/ICertificate";
import sadSmile from "../../../assets/img/sad-smile.svg";
import Loader from "../../UI/Loader/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CertificateItem from "../CertificateItem/CertificateItem";

const CertificateList: FC = () => {
  const { data: certificates, error } = useFetch<ICertificate[]>(
    `${import.meta.env.VITE_API_URL}/certificates`
  );

  console.log(certificates);

  return (
    <div className={cls.certificate}>
      <div className={classNames(cls.certificateContent, "container")}>
        {certificates ? (
          certificates?.length > 0 ? (
            certificates.map((item) => (
              <CertificateItem certificate={item} key={item.id} />
              // <div className={cls.certificateItem} key={item.id}>
              //   <LazyLoadImage
              //     src={
              //       import.meta.env.VITE_API_URL +
              //       "/images/certificates/" +
              //       item.image
              //     }
              //     alt={item.description}
              //     effect="blur"
              //   />
              //   <div className={cls.certificateItemInfo}>
              //     <p className={cls.certificateItemInfoText}>
              //       {item.description}
              //     </p>
              //   </div>
              // </div>
            ))
          ) : (
            <h2 className={cls.certificateErrorText}>
              Новостей не найдено
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
