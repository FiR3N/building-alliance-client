import { FC, useState } from "react";
import cls from "./CertificateItem.module.scss";
import { ICertificate } from "../../../models/Entity/ICertificate";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "../../UI/Modal/Modal";
import classNames from "classnames";
import CertificateDeleteModal from "../Modals/CertificateDeleteModal/CertificateDeleteModal";
import CertificateModal from "../Modals/CertificateModal/CertificateModal";
import MyButton from "../../UI/MyButton/MyButton";

import editImage from "../../../assets/img/edit.svg";
import deleteImage from "../../../assets/img/delete.svg";
import arrow from "../../../assets/img/arrow-right.png";

interface CertificateItemProps {
  certificate: ICertificate;
  isAdmin?: boolean;
}

const CertificateItem: FC<CertificateItemProps> = ({
  certificate,
  isAdmin,
}) => {
  const [isCertificateChangeModalOpen, setIsCertificateChangeModalOpen] =
    useState<boolean>(false);
  const [isCertificateDeleteModalOpen, setIsCertificateDeleteModalOpen] =
    useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen && (
        <Modal closeMethod={setIsModalOpen}>
          <div className={cls.certificateItemInModal}>
            <h2>{certificate.description}</h2>
            <LazyLoadImage
              src={
                import.meta.env.VITE_API_URL +
                "/images/certificates/" +
                certificate.image
              }
              alt={certificate.description}
              effect="blur"
            />
          </div>
        </Modal>
      )}
      {isCertificateDeleteModalOpen && (
        <CertificateDeleteModal
          closeMethod={setIsCertificateDeleteModalOpen}
          certificate={certificate}
        />
      )}
      {isCertificateChangeModalOpen && (
        <CertificateModal
          closeMethod={setIsCertificateChangeModalOpen}
          certificate={certificate}
        />
      )}
      <div className={cls.certificateItem}>
        {isAdmin && (
          <div className={cls.certificateItemAdminPanel}>
            <img
              src={editImage}
              alt="изменить"
              onClick={() => setIsCertificateChangeModalOpen(true)}
            />
            <img
              src={deleteImage}
              alt="удалить"
              onClick={() => setIsCertificateDeleteModalOpen(true)}
            />
          </div>
        )}
        <div
          className={classNames(
            cls.certificateItemContent,
            isAdmin && cls._notAnimated
          )}
          onClick={() => setIsModalOpen(true)}
        >
          <LazyLoadImage
            src={
              import.meta.env.VITE_API_URL +
              "/images/certificates/" +
              certificate.image
            }
            alt={certificate.description}
            effect="blur"
          />
          <div className={cls.certificateItemInfo}>
            <p className={cls.certificateItemInfoText}>
              {certificate.description}
            </p>
            <MyButton>
              <img src={arrow} alt="arrow" />
            </MyButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateItem;
