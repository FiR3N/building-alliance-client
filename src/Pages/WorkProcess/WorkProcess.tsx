import { FC, Suspense, lazy } from "react";
import cls from "./WorkProcess.module.scss";
import { useLocation } from "react-router-dom";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";

const WorkProcessContent = lazy(
  () => import("./WorkProcessContent/WorkProcessContent")
);

const WorkProcess: FC = () => {
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
