import { FC, Suspense, lazy, useEffect } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";
import { useLocation } from "react-router-dom";

const OurWorksList = lazy(
  () => import("../../components/Business/OurWorksList/OurWorksList")
);

const OurWorks: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout title="Наши работы" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <OurWorksList isFull={true} />
      </Suspense>
    </PageLayout>
  );
};

export default OurWorks;
