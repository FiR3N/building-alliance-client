import { Dispatch, FC, SetStateAction, useEffect } from "react";
import cls from "./VacancyDeleteModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import MyButton from "../../../UI/MyButton/MyButton";
import classNames from "classnames";
import { IVacancy } from "../../../../models/Entity/IVacancy";
import { vacancyAPI } from "../../../../api/VacancyAPI";

interface VacanacyDeleteModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  vacancy: IVacancy;
}

const VacanacyDeleteModal: FC<VacanacyDeleteModalProps> = ({
  closeMethod,
  vacancy,
}) => {
  vacancy;
  const [deleteVacancy, { isSuccess, isError }] =
    vacancyAPI.useDeleteNewsMutation();

  const deleteVacancyHandler = async () => {
    await deleteVacancy({ id: vacancy.id });
  };

  useEffect(() => {
    if (isSuccess) {
      closeMethod(false);
    }
  }, [isSuccess]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.vacancyDeleteModal}>
        <h2 className={cls.vacancyDeleteModalTitle}>
          Вы точно уверенны, что хотите удалить данную вакансию?
        </h2>
        {isError && (
          <p className={classNames(cls.vacancyDeleteModalError, "error-text")}>
            Ошибка при удалении!
          </p>
        )}
        <p className="default-text">
          <span className="bold-text">Номер вакансии:</span> {vacancy.id}
        </p>
        <p className="default-text">
          <span className="bold-text">Название вакансии:</span> {vacancy.name}
        </p>
        <p className="default-text">
          <span className="bold-text">Описание вакансии:</span>{" "}
          {vacancy.description}
        </p>
        <MyButton onClick={deleteVacancyHandler}>Да</MyButton>
      </div>
    </Modal>
  );
};

export default VacanacyDeleteModal;
