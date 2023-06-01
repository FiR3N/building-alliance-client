import { Dispatch, FC, SetStateAction, useEffect } from "react";
import cls from "./VehicleDeleteModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import MyButton from "../../../UI/MyButton/MyButton";
import classNames from "classnames";
import { IVehicle } from "../../../../models/Entity/IVehicle";
import { vehicleAPI } from "../../../../api/VehicleAPI";

interface VehicleDeleteModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  vehicle: IVehicle;
}

const VehicleDeleteModal: FC<VehicleDeleteModalProps> = ({
  closeMethod,
  vehicle,
}) => {
  vehicle;
  const [deleteVehicle, { isSuccess, isError }] =
    vehicleAPI.useDeleteMixtureMutation();

  const deleteVacancyHandler = async () => {
    await deleteVehicle({ id: vehicle.id });
  };

  useEffect(() => {
    if (isSuccess) {
      closeMethod(false);
    }
  }, [isSuccess]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.vehicleDeleteModal}>
        <h2 className={cls.vehicleDeleteModalTitle}>
          Вы точно уверенны, что хотите удалить данную технику?
        </h2>
        {isError && (
          <p className={classNames(cls.vehicleDeleteModalError, "error-text")}>
            Ошибка при удалении!
          </p>
        )}
        <p className="default-text">
          <span className="bold-text">Номер техники</span> {vehicle.id}
        </p>
        <p className="default-text">
          <span className="bold-text">Название техники:</span> {vehicle.name}
        </p>
        <p className="default-text">
          <span className="bold-text">Цена с НДС:</span> {vehicle.priceWithVAT}
        </p>
        <p className="default-text">
          <span className="bold-text">Цена без НДС:</span>{" "}
          {vehicle.priceWithoutVAT}
        </p>
        <MyButton onClick={deleteVacancyHandler}>Да</MyButton>
      </div>
    </Modal>
  );
};

export default VehicleDeleteModal;
