import { FC, Suspense, lazy } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import ServiceList from "../../components/Business/ServiceList/ServiceList";

const Services: FC = () => {
  const { pathname } = useLocation();

  return (
    <PageLayout title="Наши услуги" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <ServiceList />
      </Suspense>
    </PageLayout>
  );
};

export default Services;
