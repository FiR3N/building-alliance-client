import { FC, lazy, Suspense, useEffect } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";

const NewsList = lazy(
  () => import("../../components/Business/NewsList/NewsList")
);

const News: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout title="Новости" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <NewsList isFull />
      </Suspense>
    </PageLayout>
  );
};

export default News;
