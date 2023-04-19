import { FC, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";

const AboutCompanyContent = lazy(
  () => import("./AboutCompanyContent/AboutCompanyContent")
);

const AboutCompany: FC = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout title="О компании" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <AboutCompanyContent />
      </Suspense>
    </PageLayout>
  );
};

export default AboutCompany;
