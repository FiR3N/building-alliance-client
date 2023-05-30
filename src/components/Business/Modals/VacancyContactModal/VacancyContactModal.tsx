import { FC, Dispatch, SetStateAction, useEffect, useState } from "react";
import cls from "./VacancyContactModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import MyButton from "../../../UI/MyButton/MyButton";
import { SubmitHandler, useForm } from "react-hook-form";
import IVacancyContactForm from "../../../../models/Forms/IVacancyContactForm";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import MyInput from "../../../UI/MyInput/MyInput";
import MyTextArea from "../../../UI/MyTextArea/MyTextArea";
import EmailService from "../../../../api/EmailService";

interface VacancyContactModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  vacancyName: string;
}

const VacancyContactModal: FC<VacancyContactModalProps> = ({
  closeMethod,
  vacancyName,
}) => {
  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<IVacancyContactForm>({ mode: "onChange" });

  const [error, setError] = useState<string>("");

  const onSubmit: SubmitHandler<IVacancyContactForm> = async (data) => {
    await EmailService.sendVacancyFromUser(
      data.name,
      data.surname,
      data.patronymic,
      data.email,
      data.telephone,
      data.text,
      vacancyName
    ).catch((e) => setError(e.message));
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.vacancyContactModal}>
        <h2 className={cls.vacancyContactModalTitle}>
          Отправить заявку на вакансию
        </h2>
        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>Сообщение успешно отправлено</InfoBlock>
        )}
        {error && (
          <InfoBlock blockType={-1}>
            Ошибка отправки сообщения! (Ошибка с нашей стороны)
          </InfoBlock>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cls.vacancyContactModalForm}
        >
          <MyInput
            labelTitle="Имя"
            placeholder="Введите ваше имя..."
            register={register("name", {
              required: "Имя не может быть пустым!",
            })}
            error={errors.name}
          />
          <MyInput
            labelTitle="Фамилия"
            placeholder="Введите вашу фамилию..."
            register={register("surname", {
              required: "Фамилия не может быть пустым!",
            })}
            error={errors.surname}
          />
          <MyInput
            labelTitle="Отчество"
            placeholder="Введите ваше отчество..."
            register={register("patronymic", {
              required: "Отчество не может быть пустым!",
            })}
            error={errors.patronymic}
          />
          <MyInput
            labelTitle="Телефон"
            placeholder="Введите ваш номер телефона..."
            register={register("telephone", {
              required: "Телефон не может быть пустым!",
            })}
            type="tel"
            error={errors.telephone}
          />
          <MyInput
            labelTitle="Почта"
            placeholder="Введите вашy почту..."
            register={register("email", {
              required: "Почта не может быть пустой!",
              pattern: {
                value:
                  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                message: "Неверный формат почты",
              },
            })}
            type="email"
            error={errors.email}
          />
          <MyTextArea
            labelTitle="Дополнение (не обязательно)"
            placeholder="Введите дополнительную информацию..."
            register={register("text")}
            error={errors.text}
            rows={8}
          />
          <MyButton disabled={isSubmitting}>Отправить</MyButton>
        </form>
      </div>
    </Modal>
  );
};

export default VacancyContactModal;
