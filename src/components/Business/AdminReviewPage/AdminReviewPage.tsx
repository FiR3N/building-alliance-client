import { FC, useState } from "react";
import ReviewsList from "../ReviewsList/ReviewsList";
import MyButton from "../../UI/MyButton/MyButton";
import ReviewsModal from "../Modals/ReviewsModal/ReviewsModal";

interface AdminReviewPageProps {}

const AdminReviewPage: FC<AdminReviewPageProps> = () => {
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);

  return (
    <>
      {isReviewsModalOpen && (
        <ReviewsModal closeMethod={setIsReviewsModalOpen} isAdmin />
      )}
      <div className="container">
        <MyButton onClick={() => setIsReviewsModalOpen(true)}>
          Добавить отзыв
        </MyButton>
      </div>
      <ReviewsList isAdmin />;
    </>
  );
};

export default AdminReviewPage;
