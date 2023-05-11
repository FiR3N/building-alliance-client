import { FC, Suspense, lazy, useEffect } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";

const HistoryContent = lazy(() => import("./HistoryContent/HistoryContent"));

const History: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout title="Наша история" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <HistoryContent />
      </Suspense>
    </PageLayout>
  );
};

export default History;
