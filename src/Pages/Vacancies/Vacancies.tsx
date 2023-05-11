import { FC, useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";

const VacanciesList = lazy(
  () => import("../../components/Business/VacanciesList/VacancyList")
);

const Vacancies: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout title="Вакансии" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <VacanciesList />
      </Suspense>
    </PageLayout>
  );
};

export default Vacancies;
