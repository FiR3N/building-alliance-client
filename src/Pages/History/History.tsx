import { FC, Suspense } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import HistoryContent from "./HistoryContent/HistoryContent";
import Loader from "../../components/UI/Loader/Loader";

interface HistoryProps {}

const History: FC<HistoryProps> = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout title="Наша история" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <HistoryContent />
      </Suspense>
    </PageLayout>
  );
};

export default History;
