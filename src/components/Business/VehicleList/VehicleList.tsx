import { FC, useState } from "react";
import cls from "./VehicleList.module.scss";
import { vehicleAPI } from "../../../api/VehicleAPI";
import classNames from "classnames";
import MyButton from "../../UI/MyButton/MyButton";
import VehicleOrderModal from "../Modals/VehicleOrderModal/VehicleOrderModal";
import VehicleModal from "../Modals/VehicleModal/VehicleModal";
import { IVehicle } from "../../../models/Entity/IVehicle";
import VehicleDeleteModal from "../Modals/VehicleDeleteModal/VehicleDeleteModal";

import sadSmile from "../../../assets/img/sad-smile.png";
import editImage from "../../../assets/img/edit.svg";
import deleteImage from "../../../assets/img/delete.svg";

interface VehicleListProps {
  isAdmin?: boolean;
}

const VehicleList: FC<VehicleListProps> = ({ isAdmin }) => {
  const [isVehicleOrderModalOpen, setIsVehicleOrderModalOpen] =
    useState<boolean>(false);
  const [isVehicleEditModalOpen, setIsVehicleEditModalOpen] =
    useState<boolean>(false);
  const [isVehicleDeleteModalOpen, setIsVehicleDeleteModalOpen] =
    useState<boolean>(false);
  const [vehicle, setVehicle] = useState<IVehicle>({} as IVehicle);
  let { error, data: vehicles } = vehicleAPI.useGetVehiclesQuery({});

  if (error) {
    return (
      <div className={classNames(cls.vehicleList, "container")}>
        <h2 className="error-block">
          Ошибка получения техники
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  if (vehicles?.length === 0) {
    return (
      <div className={classNames(cls.vehicleList, "container")}>
        <h2 className="error-block">
          Техники не найадено
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  const vehicleOrderButtonClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsVehicleOrderModalOpen(true);
  };

  const vehicleEditButtonClickHandler = (vehicle: IVehicle) => {
    setIsVehicleEditModalOpen(true);
    setVehicle(vehicle);
  };

  const vehicleDeleteButtonClickHandler = (vehicle: IVehicle) => {
    setIsVehicleDeleteModalOpen(true);
    setVehicle(vehicle);
  };

  return (
    <>
      {isVehicleOrderModalOpen && (
        <VehicleOrderModal closeMethod={setIsVehicleOrderModalOpen} />
      )}
      {isVehicleDeleteModalOpen && (
        <VehicleDeleteModal
          closeMethod={setIsVehicleDeleteModalOpen}
          vehicle={vehicle}
        />
      )}
      {isVehicleEditModalOpen && (
        <VehicleModal
          closeMethod={setIsVehicleEditModalOpen}
          vehicle={vehicle}
        />
      )}
      <div className={classNames(cls.vehicleList, "container")}>
        <h2 className={cls.vehicleListTitle}>Наша техника</h2>
        <div className={cls.vehicleListTable}>
          <div className={classNames(cls.vehicleListTableHeaders, cls.gray)}>
            <h5 className={cls.vehicleListTableHeadersItem}>Название</h5>
            <h5 className={cls.vehicleListTableHeadersItem}>
              Полнцая цена за 1 м/час без НДС
            </h5>
            <h5 className={cls.vehicleListTableHeadersItem}>
              Полнцая цена за 1 м/час с НДС
            </h5>
          </div>
          {vehicles?.map((vehicle, index) => {
            return (
              <div
                className={classNames(
                  cls.vehicleListTableContent,
                  index % 2 !== 0 && cls.gray
                )}
                key={vehicle.id}
              >
                {isAdmin && (
                  <div className={cls.vehicleListAdminPanel}>
                    <img
                      src={editImage}
                      alt="изменить"
                      onClick={(e) => vehicleEditButtonClickHandler(vehicle)}
                    />
                    <img
                      src={deleteImage}
                      alt="удалить"
                      onClick={(e) => vehicleDeleteButtonClickHandler(vehicle)}
                    />
                  </div>
                )}
                <p
                  className={classNames(
                    cls.vehicleListTableContentItem,
                    "default-text"
                  )}
                >
                  {vehicle.name}
                </p>

                <p
                  className={classNames(
                    cls.vehicleListTableContentItem,
                    "default-text"
                  )}
                >
                  {vehicle.priceWithoutVAT}
                </p>
                <p
                  className={classNames(
                    cls.vehicleListTableContentItem,
                    "default-text"
                  )}
                >
                  {vehicle.priceWithVAT}
                </p>
              </div>
            );
          })}
        </div>
        {!isAdmin && (
          <MyButton onClick={vehicleOrderButtonClickHandler}>
            Оформить заказ
          </MyButton>
        )}
      </div>
    </>
  );
};

export default VehicleList;
