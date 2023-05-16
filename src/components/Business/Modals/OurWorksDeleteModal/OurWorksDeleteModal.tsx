import { Dispatch, FC, SetStateAction, useEffect } from "react";
import cls from "./OurWorksDeleteModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import MyButton from "../../../UI/MyButton/MyButton";
import classNames from "classnames";
import { IWork } from "../../../../models/Entity/IWorks";
import { worksAPI } from "../../../../api/WorksAPI";

interface OurWorksDeleteModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  work: IWork;
}

const OurWorksDeleteModal: FC<OurWorksDeleteModalProps> = ({
  closeMethod,
  work,
}) => {
  const [deleteWork, { isSuccess, isError }] = worksAPI.useDeleteWorkMutation();

  const deleteWorkHandler = async () => {
    await deleteWork({ id: work.id });
  };

  useEffect(() => {
    if (isSuccess) {
      closeMethod(false);
    }
  }, [isSuccess]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.ourWorksDeleteModal}>
        <h2 className={cls.ourWorksModalTitle}>
          Вы точно уверенны, что хотите удалить данный объект?
        </h2>
        {isError && (
          <p className={classNames(cls.ourWorksDeleteError, "error-text")}>
            Ошибка при удалении!
          </p>
        )}
        <p className="default-text">
          <span className="bold-text">Номер объекта:</span> {work.id}
        </p>
        <p className="default-text">
          <span className="bold-text">Название объекта:</span> {work.name}
        </p>
        <img
          src={import.meta.env.VITE_API_URL + "/images/works/" + work.image}
          alt={`work-${work.id}`}
        />
        <MyButton onClick={deleteWorkHandler}>Да</MyButton>
      </div>
    </Modal>
  );
};

export default OurWorksDeleteModal;
