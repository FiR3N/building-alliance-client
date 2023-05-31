import { FC, useEffect, Dispatch, SetStateAction, useState } from "react";
import cls from "./VacancyModal.module.scss";
import { IVacancy } from "../../../../models/Entity/IVacancy";
import { SubmitHandler, useForm } from "react-hook-form";
import IVacancyForm from "../../../../models/Forms/IVacancyForm";
import { vacancyAPI } from "../../../../api/VacancyAPI";
import MyButton from "../../../UI/MyButton/MyButton";
import Modal from "../../../UI/Modal/Modal";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import MyInput from "../../../UI/MyInput/MyInput";
import MyTextArea from "../../../UI/MyTextArea/MyTextArea";

interface VacancyModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  vacancy?: IVacancy;
}

const VacancyModal: FC<VacancyModalProps> = ({ closeMethod, vacancy }) => {
  const [name, setName] = useState<string>(vacancy ? vacancy.name : "");
  const [description, setDescription] = useState<string>(
    vacancy ? vacancy.description : ""
  );
  const [wage, setWage] = useState<number | null>(
    vacancy ? vacancy?.wage : null
  );
  const [experience, setExperience] = useState<string>(
    vacancy ? vacancy.experience : ""
  );
  const [occupation, setOccupation] = useState<string>(
    vacancy ? vacancy.occupation : ""
  );

  const [putVacancy, { error: putError }] = vacancyAPI.usePutWorkMutation();
  const [createVacancy, { error: createError }] =
    vacancyAPI.usePostVacancyMutation();

  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<IVacancyForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IVacancyForm> = async (data) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("experience", experience);
    formData.append("occupation", occupation);
    formData.append("wage", String(wage));

    if (vacancy) {
      await putVacancy({ id: vacancy.id, formData: formData }).unwrap();
    } else {
      await createVacancy({ formData: formData }).unwrap();
    }
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.vacancyModal}>
        {vacancy ? (
          <h2 className={cls.vacancyModalTitle}>Редактирование</h2>
        ) : (
          <h2 className={cls.vacancyModalTitle}>Создание</h2>
        )}

        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            {vacancy
              ? `Вакансия ${vacancy?.id} успешно отредактирована`
              : `Вакансия успешно создана`}
          </InfoBlock>
        )}
        {putError && (
          <InfoBlock blockType={-1}>Ошибка редактирования!</InfoBlock>
        )}
        {createError && <InfoBlock blockType={-1}>Ошибка создания!</InfoBlock>}
        <form
          className={cls.vacancyModalForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <MyInput
            labelTitle="Название"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Введите название..."
            required
            maxLength={255}
            register={register("name", {
              required: "Название не может быть пустым!",
            })}
            error={errors.name}
          />
          <MyInput
            labelTitle="Зарплата от"
            min={0}
            value={Number(wage)}
            onChange={(e) => setWage(Number(e.currentTarget.value))}
            type="number"
            placeholder="Введите зарплату от..."
            register={register("wage")}
            error={errors.wage}
          />
          <MyInput
            labelTitle="Опыт"
            value={experience}
            onChange={(e) => setExperience(e.currentTarget.value)}
            placeholder="Введите опыт работы..."
            required
            register={register("experience", {
              required: "Опыт работы не может быть пустым!",
            })}
            error={errors.experience}
          />
          <MyInput
            labelTitle="Рабочий график"
            value={occupation}
            onChange={(e) => setOccupation(e.currentTarget.value)}
            placeholder="Введите рабочий график..."
            required
            register={register("occupation", {
              required: "Рабочий график не может быть пустым!",
            })}
            error={errors.occupation}
          />
          <MyTextArea
            labelTitle="Описание"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            placeholder="Введите описание..."
            required
            maxLength={255}
            register={register("description", {
              required: "Описание не может быть пустым!",
            })}
            error={errors.description}
          />
          <MyButton disabled={isSubmitting} type="submit">
            Сохранить
          </MyButton>
        </form>
      </div>
    </Modal>
  );
};

export default VacancyModal;
