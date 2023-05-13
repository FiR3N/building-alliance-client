import { Dispatch, FC, SetStateAction, useEffect } from "react";
import cls from "./CertificateDeleteModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import MyButton from "../../../UI/MyButton/MyButton";
import classNames from "classnames";
import { ICertificate } from "../../../../models/Entity/ICertificate";
import { certificateAPI } from "../../../../api/CertificateAPI";

interface CertificateDeleteModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  certificate: ICertificate;
}

const CertificateDeleteModal: FC<CertificateDeleteModalProps> = ({
  closeMethod,
  certificate,
}) => {
  const [deleteCertificate, { isSuccess, isError }] =
    certificateAPI.useDeleteCertificateMutation();

  const deleteNewsHandler = async () => {
    await deleteCertificate({ id: certificate.id });
  };

  useEffect(() => {
    if (isSuccess) {
      closeMethod(false);
    }
  }, [isSuccess]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.certificateDeleteModal}>
        <h2 className={cls.certificateDeleteModalTitle}>
          Вы точно уверенны, что хотите удалить данный сертификат?
        </h2>
        {isError && (
          <p
            className={classNames(
              cls.certificateDeleteModalError,
              "error-text"
            )}
          >
            Ошибка при удалении!
          </p>
        )}
        <p className="default-text">
          <span className="bold-text">Номер сертификата:</span> {certificate.id}
        </p>
        <p className="default-text">
          <span className="bold-text">Название сертификата:</span>{" "}
          {certificate.description}
        </p>
        <img
          src={
            import.meta.env.VITE_API_URL +
            "/images/certificates/" +
            certificate.image
          }
          alt={`certificate-${certificate.id}`}
        />
        <MyButton onClick={deleteNewsHandler}>Да</MyButton>
      </div>
    </Modal>
  );
};

export default CertificateDeleteModal;
