import { FC, Suspense } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";
import AboutCompanyContent from "./AboutCompanyContent/AboutCompanyContent";

interface AboutCompanyProps {}

const AboutCompany: FC<AboutCompanyProps> = () => {
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
