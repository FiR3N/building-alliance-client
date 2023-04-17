import { FC, lazy, Suspense } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";

const NewsList = lazy(
  () => import("../../components/Business/NewsList/NewsList")
);

interface NewsProps {}

const News: FC<NewsProps> = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout title="Новости" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <NewsList />
      </Suspense>
    </PageLayout>
  );
};

export default News;
