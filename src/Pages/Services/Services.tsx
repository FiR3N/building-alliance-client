import { FC, Suspense, lazy, useEffect } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";

const ServiceList = lazy(
  () => import("../../components/Business/ServiceList/ServiceList")
);

const Services: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout title="Наши услуги" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <ServiceList />
      </Suspense>
    </PageLayout>
  );
};

export default Services;
