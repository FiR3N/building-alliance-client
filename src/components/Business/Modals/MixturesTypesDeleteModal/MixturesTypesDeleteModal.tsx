import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import cls from "./MixturesTypesDeleteModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import { mixturesTypesAPI } from "../../../../api/MixturesTypesAPI";
import classNames from "classnames";
import MySelect from "../../../UI/MySelect/MySelect";
import MyButton from "../../../UI/MyButton/MyButton";
import { SubmitHandler, useForm } from "react-hook-form";

interface MixturesTypesDeleteModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
}

const MixturesTypesDeleteModal: FC<MixturesTypesDeleteModalProps> = ({
  closeMethod,
}) => {
  const [selectedMixtureType, setSelectedMixtureType] = useState<{
    id: number;
    content: string;
  } | null>(null);
  const [deleteMixtureType, { isError }] =
    mixturesTypesAPI.useDeleteMixtureTypeMutation();
  const { data: types } = mixturesTypesAPI.useGetMixturesTypesQuery({});
  const newTypes =
    types?.map(({ id, name }) => ({ id: id, content: name })) || [];

  const {
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
    control,
    setValue,
  } = useForm<{ mixtureTypeId: number }>({ mode: "onChange" });

  const onSubmit: SubmitHandler<{ mixtureTypeId: number }> = async (data) => {
    await deleteMixtureType({ id: Number(selectedMixtureType?.id) }).unwrap();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      closeMethod(false);
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (selectedMixtureType?.id)
      setValue("mixtureTypeId", selectedMixtureType?.id);
  }, [selectedMixtureType]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.mixturesTypesDeleteModal}>
        <h2 className={cls.mixturesTypesDeleteModalTitle}>
          Вы точно уверенны, что хотите удалить данный тип раствора?
        </h2>
        <p
          className={classNames(
            cls.mixturesTypesDeleteModalDescription,
            "default-text",
            "error-text"
          )}
        >
          При удалении типа раствора удалятся и все растворы соответствующего
          типа!
        </p>
        {isError && (
          <p
            className={classNames(
              cls.mixturesTypesDeleteModalError,
              "error-text"
            )}
          >
            Ошибка при удалении!
          </p>
        )}
        <form
          className={cls.mixturesTypesDeleteModalForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <MySelect
            name="Тип раствора"
            labelTitle="Типы растворов"
            array={newTypes}
            selectedItem={selectedMixtureType}
            setSelectedItem={setSelectedMixtureType}
            formName="mixtureTypeId"
            control={control}
            rules={{ required: "Тип раствора должен быть выбран!" }}
            error={errors.mixtureTypeId}
          />
          <MyButton type="submit" disabled={isSubmitting}>
            Да
          </MyButton>
        </form>
      </div>
    </Modal>
  );
};

export default MixturesTypesDeleteModal;
