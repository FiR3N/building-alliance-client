import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import cls from "./ReviewsModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import MyInput from "../../../UI/MyInput/MyInput";
import MyTextArea from "../../../UI/MyTextArea/MyTextArea";
import IReviceForm from "../../../../models/Forms/IReviewsModal";
import MyButton from "../../../UI/MyButton/MyButton";
import { reviewsAPI } from "../../../../api/ReviewsAPI";
import { IReviews } from "../../../../models/Entity/IReviews";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import ReCAPTCHA from "react-google-recaptcha";

interface ReviewsModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  review?: IReviews;
  isAdmin?: boolean;
}

const ReviewsModal: FC<ReviewsModalProps> = ({
  closeMethod,
  review,
  isAdmin,
}) => {
  const [image, setImage] = useState<File | null>();
  const [rating, setRating] = useState<string>(review ? review.rating : "");
  const [description, setDescription] = useState<string>(
    review ? review.description : ""
  );
  const [companyName, setCompanyName] = useState<string>(
    review ? review.companyName : ""
  );
  const [isPublished, setIsPublished] = useState<boolean>(
    review ? review.isPublished : false
  );
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean | null>(
    null
  );
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IReviceForm>({ mode: "onChange" });

  const [postReview, { error: createError }] =
    reviewsAPI.usePostReviewsMutation();
  const [putReview, { error: putError }] = reviewsAPI.usePutReviewsMutation();

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
    if (isCaptchaVerified) {
      const formData = new FormData();
      formData.append("companyName", data.companyName);
      formData.append("description", data.description);
      formData.append("image", image as File);
      formData.append("rating", rating);
      isAdmin && formData.append("isPublished", String(data.isPublished));

      if (review) {
        await putReview({ id: review.id, formData: formData });
      } else {
        await postReview({ formData }).unwrap();
      }
      setIsSubmitSuccessful(true);
      reset({ companyName: "", description: "", image: "", rating: "" });
    } else {
      setIsCaptchaVerified(false);
    }
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful, isCaptchaVerified]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.reviewsModal}>
        <div className={cls.reviewsModalTitle}>
          <h2>Создание отзыва</h2>
          {isSubmitSuccessful && (
            <InfoBlock blockType={1}>
              {review
                ? `Отзыв ${review?.id} успешно отредактирован`
                : isAdmin
                ? `Отзыв успешно создан`
                : `Отзыв успешно отправлен, после проверки администратора он будет добавлен :)`}
            </InfoBlock>
          )}
          {putError && (
            <InfoBlock blockType={-1}>Ошибка редактирования!</InfoBlock>
          )}
          {createError && (
            <InfoBlock blockType={-1}>Ошибка создания!</InfoBlock>
          )}
          {isCaptchaVerified === false && (
            <InfoBlock blockType={-1}>Подвердите, что вы человек</InfoBlock>
          )}
        </div>
        <form
          className={cls.reviewsModalForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <MyInput
            value={companyName}
            onChange={(e) => setCompanyName(e.currentTarget.value)}
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
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            labelTitle="Содержание отзыва"
            placeholder="Введите ваш отзыв..."
            required
            rows={8}
            maxLength={800}
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
            placeholder={"Введите оценку (от 1 до 10)"}
            required
            register={register("rating", {
              required: "Оценка не может быть пустой!",
            })}
            error={errors.rating}
          />
          {isAdmin && (
            <div className={cls.reviewsModalFormCheckBox}>
              <MyInput
                type="checkbox"
                labelTitle="Опубликовать"
                checked={isPublished}
                onChange={(e) => {
                  setIsPublished((prev) => !prev);
                }}
                register={register("isPublished")}
                error={errors.isPublished}
              />
            </div>
          )}
          {review && (
            <div className={cls.reviewsModalFormImageBlock}>
              <label>Текущее изображение</label>
              <img
                src={
                  import.meta.env.VITE_API_URL +
                  "/images/reviews/" +
                  review?.image
                }
                alt="news_img"
                className={cls.reviewsModalFormImage}
              />
            </div>
          )}
          {image && (
            <div className={cls.reviewsModalFormImageBlock}>
              <label>Новое изображение</label>
              <img
                src={URL.createObjectURL(image)}
                alt="service_new_img"
                className={cls.reviewsModalFormImage}
              />
            </div>
          )}
          <MyInput
            labelTitle="Изображение организации (не обязательно)"
            onChange={selectFile}
            type="file"
          />
          <div className={cls.reviewsModalFormRecaptcha}>
            <ReCAPTCHA
              sitekey="6LdH3J0mAAAAAMpTtEyi3_OdpxAnTiP7nsd5ZbRd"
              onChange={() => setIsCaptchaVerified(true)}
            />
          </div>

          <MyButton type="submit" disabled={isSubmitting}>
            Отправить отзыв
          </MyButton>
        </form>
      </div>
    </Modal>
  );
};

export default ReviewsModal;
