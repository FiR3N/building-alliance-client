import { FC, Dispatch, SetStateAction, useEffect } from "react";
import cls from "./MixturesTypesModal.module.scss";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import Modal from "../../../UI/Modal/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import { mixturesTypesAPI } from "../../../../api/MixturesTypesAPI";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";

interface MixturesTypesModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
}

const MixturesTypesModal: FC<MixturesTypesModalProps> = ({ closeMethod }) => {
  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<{ name: string }>({ mode: "onChange" });

  const [createMixtureType, { error: createError }] =
    mixturesTypesAPI.usePostMixtureTypeMutation();

  const onSubmit: SubmitHandler<{ name: string }> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);

    await createMixtureType({ formData: formData }).unwrap();
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.mixturesTypesModal}>
        <h2 className={cls.mixturesTypesModalTitle}>Создание</h2>
        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>{`Тип раствора успешно добавлен`}</InfoBlock>
        )}
        {createError && <InfoBlock blockType={-1}>Ошибка создания!</InfoBlock>}
        <form
          className={cls.mixturesTypesModalForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <MyInput
            labelTitle="Название"
            placeholder="Введите название раствора..."
            required
            maxLength={100}
            register={register("name", {
              required: "Название не может быть пустым!",
            })}
            error={errors.name}
          />
          <MyButton type="submit" disabled={isSubmitting}>
            Добавить
          </MyButton>
        </form>
      </div>
    </Modal>
  );
};

export default MixturesTypesModal;
