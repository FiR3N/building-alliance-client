import { FC, Suspense, lazy } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";
import { useLocation } from "react-router-dom";

const CertificateList = lazy(
  () => import("../../components/Business/CertificateList/CertificateList")
);

const Certificate: FC = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout title="Наши сертификаты" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <CertificateList />
      </Suspense>
    </PageLayout>
  );
};

export default Certificate;
