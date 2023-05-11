import { FC, useState } from "react";
import cls from "./CertificateItem.module.scss";
import { ICertificate } from "../../../models/Entity/ICertificate";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "../../UI/Modal/Modal";

interface CertificateItemProps {
  certificate: ICertificate;
}

const CertificateItem: FC<CertificateItemProps> = ({ certificate }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen && (
        <Modal closeMethod={setIsModalOpen} state={isModalOpen}>
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

      <div className={cls.certificateItem} onClick={() => setIsModalOpen(true)}>
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
        </div>
      </div>
    </>
  );
};

export default CertificateItem;
