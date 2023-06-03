import { FC, Dispatch, SetStateAction, useEffect } from "react";
import cls from "./MixtureDeleteModal.module.scss";
import { IMixture } from "../../../../models/Entity/IMixture";
import { mixturesAPI } from "../../../../api/MixturesAPI";
import Modal from "../../../UI/Modal/Modal";
import classNames from "classnames";
import MyButton from "../../../UI/MyButton/MyButton";

interface MixtureDeleteModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  mixture: IMixture;
}

const MixtureDeleteModal: FC<MixtureDeleteModalProps> = ({
  closeMethod,
  mixture,
}) => {
  const [deleteMixture, { isSuccess, isError }] =
    mixturesAPI.useDeleteMixtureMutation();

  const deleteMixtureHandler = async () => {
    await deleteMixture({ id: mixture.id });
  };

  useEffect(() => {
    if (isSuccess) {
      closeMethod(false);
    }
  }, [isSuccess]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.mixtureDeleteModal}>
        <h2 className={cls.mixtureDeleteModalTitle}>
          Вы точно уверенны, что хотите удалить данный раствор?
        </h2>
        {isError && (
          <p className={classNames(cls.mixtureDeleteModalError, "error-text")}>
            Ошибка при удалении!
          </p>
        )}
        <p className="default-text">
          <span className="bold-text">Номер раствора</span> {mixture.id}
        </p>
        <p className="default-text">
          <span className="bold-text">Название раствора:</span> {mixture.name}
        </p>
        <p className="default-text">
          <span className="bold-text">Цена с НДС:</span> {mixture.priceWithVAT}
        </p>
        <p className="default-text">
          <span className="bold-text">Цена без НДС:</span>{" "}
          {mixture.priceWithoutVAT}
        </p>
        <MyButton onClick={deleteMixtureHandler}>Да</MyButton>
      </div>
    </Modal>
  );
};

export default MixtureDeleteModal;
