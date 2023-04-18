import { FC, Suspense } from "react";
import cls from "./WorkProcess.module.scss";
import { useLocation } from "react-router-dom";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";
import WorkProcessContent from "./WorkProcessContent/WorkProcessContent";

interface WorkProcessProps {}

const WorkProcess: FC<WorkProcessProps> = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout title="Рабочий процесс" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <WorkProcessContent />
      </Suspense>
    </PageLayout>
  );
};

export default WorkProcess;
