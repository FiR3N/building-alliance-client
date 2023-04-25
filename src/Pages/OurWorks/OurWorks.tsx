import { FC, Suspense, lazy } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";
import { useLocation } from "react-router-dom";

const OurWorksList = lazy(
  () => import("../../components/Business/OurWorksList/OurWorksList")
);

const OurWorks: FC = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout title="Наши работы" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <OurWorksList />
      </Suspense>
    </PageLayout>
  );
};

export default OurWorks;
