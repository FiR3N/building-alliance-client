import { FC, Dispatch, SetStateAction, useState } from "react";
import cls from "./ReviewsModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import MyInput from "../../../UI/MyInput/MyInput";
import MyTextArea from "../../../UI/MyTextArea/MyTextArea";
import IReviceForm from "../../../../models/Forms/IReviewsModal";
import MyButton from "../../../UI/MyButton/MyButton";
import { reviewsAPI } from "../../../../api/ReviewsAPI";

interface ReviewsModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
}

const ReviewsModal: FC<ReviewsModalProps> = ({ closeMethod }) => {
  const [image, setImage] = useState<File | null>();
  const [rating, setRating] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IReviceForm>({ mode: "onChange" });

  const [postReview, { error: postError }] =
    reviewsAPI.usePostReviewsMutation();

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    setImage(e.target.files[0]);
  };

  const handleInputRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const regex = /^(?:[1-9]|10)?$/;
    if (regex.test(inputValue)) {
      setRating(inputValue);
    }
  };
  const onSubmit: SubmitHandler<IReviceForm> = async (data) => {
    const formData = new FormData();
    formData.append("companyName", data.companyName);
    formData.append("description", data.description);
    formData.append("image", image as File);
    formData.append("rating", rating);

    await postReview({ formData }).unwrap();
    reset({ companyName: "", description: "", image: "", rating: "" });
  };

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.reviewsModal}>
        <h2 className={cls.reviewsModalTitle}>Создание отзыва</h2>
        <form
          className={cls.reviewsModalForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <MyInput
            labelTitle="Название компании"
            placeholder="Введите имя организации либо ФИО..."
            maxLength={100}
            required
            register={register("companyName", {
              required: "Название компании не может быть пустым!",
            })}
            error={errors.companyName}
          />
          <MyTextArea
            labelTitle="Содержание отзыва"
            placeholder="Введите ваш отзыв..."
            required
            rows={7}
            register={register("description", {
              required: "Содержание отзыва не может быть пустым!",
            })}
            error={errors.description}
          />
          <MyInput
            labelTitle={`Оценка`}
            value={rating}
            onChange={handleInputRatingChange}
            type="text"
            maxLength={800}
            placeholder={"Введите оценку (от 1 до 10)"}
            required
            register={register("rating", {
              required: "Оценка не может быть пустой!",
            })}
            error={errors.rating}
          />

          <MyInput
            labelTitle="Изображение организации"
            onChange={selectFile}
            type="file"
          />
          <MyButton type="submit" disabled={isSubmitting}>
            Отправить отзыв
          </MyButton>
        </form>
      </div>
    </Modal>
  );
};

export default ReviewsModal;
