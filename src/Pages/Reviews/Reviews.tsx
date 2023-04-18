import { FC, Suspense } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import ReviewsContent from "./ReviewsContent/ReviewsContent";

interface ReviewsProps {}

const Reviews: FC<ReviewsProps> = () => {
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
