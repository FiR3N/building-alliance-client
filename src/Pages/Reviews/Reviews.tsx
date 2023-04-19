import { FC, Suspense, lazy } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";

const ReviewsContent = lazy(() => import("./ReviewsContent/ReviewsContent"));

const Reviews: FC = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout title="Отзывы" pathname={pathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <ReviewsContent />
      </Suspense>
    </PageLayout>
  );
};

export default Reviews;
