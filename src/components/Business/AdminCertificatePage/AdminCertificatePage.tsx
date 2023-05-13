import { FC, useState } from "react";
import cls from "./AdminCertificatePage.module.scss";
import CertificateList from "../CertificateList/CertificateList";
import MyButton from "../../UI/MyButton/MyButton";
import CertificateModal from "../Modals/CertificateModal/CertificateModal";

const AdminCertificatePage: FC = () => {
  const [isCertificateModalOpen, setIsCertificateModalOpen] =
    useState<boolean>(false);
  return (
    <>
      {isCertificateModalOpen && (
        <CertificateModal closeMethod={setIsCertificateModalOpen} />
      )}
      <div className={cls.adminCertificatePage}>
        <MyButton onClick={() => setIsCertificateModalOpen(true)}>
          Добавить сертификат
        </MyButton>
        <CertificateList isAdmin />
      </div>
    </>
  );
};

export default AdminCertificatePage;
